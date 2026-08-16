import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function getValidPayload(body: unknown) {
  if (body === null || typeof body !== "object" || Array.isArray(body)) return null;

  const { name, email, message } = body as ContactPayload;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }

  const cleanName = name.trim().replace(/[\r\n\t]+/g, " ");
  const cleanEmail = email.trim().toLowerCase();
  const cleanMessage = message.trim();

  if (
    !cleanName ||
    !cleanEmail ||
    !cleanMessage ||
    cleanName.length > MAX_NAME_LENGTH ||
    cleanEmail.length > MAX_EMAIL_LENGTH ||
    cleanMessage.length > MAX_MESSAGE_LENGTH ||
    !EMAIL_PATTERN.test(cleanEmail)
  ) {
    return null;
  }

  return { name: cleanName, email: cleanEmail, message: cleanMessage };
}

function isSameOriginRequest(req: VercelRequest) {
  const origin = req.headers.origin;
  if (!origin) return false;

  const host = req.headers["x-forwarded-host"] ?? req.headers.host;
  if (!host || Array.isArray(host)) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!isSameOriginRequest(req)) {
    return res.status(403).json({ error: "Invalid request origin." });
  }

  const contentType = req.headers["content-type"] ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return res.status(415).json({ error: "Content-Type must be application/json." });
  }

  try {
    const payload = getValidPayload(req.body);

    if (!payload) {
      return res.status(400).json({
        error: "Please provide a valid name, email address, and message.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Contact email service is not configured.");

      return res.status(500).json({
        error: "Server email configuration is missing.",
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Rishant Portfolio <onboarding@resend.dev>",
      to: ["rikushwaha78.rk@gmail.com"],
      replyTo: payload.email,
      subject: `New portfolio message from ${payload.name}`,
      text: `
Name: ${payload.name}
Email: ${payload.email}

Message:
${payload.message}
      `,
    });

    if (error) {
      console.error("Contact email service rejected a message.");

      return res.status(500).json({
        error: "Failed to send message.",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Contact form submission failed.");

    return res.status(500).json({
      error: "Something went wrong while sending the message.",
    });
  }
}
