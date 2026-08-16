import { createFileRoute } from "@tanstack/react-router";
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

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status });
}

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

function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!isSameOriginRequest(request)) {
          return json({ error: "Invalid request origin." }, 403);
        }

        if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
          return json({ error: "Content-Type must be application/json." }, 415);
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json({ error: "Invalid JSON request body." }, 400);
        }

        const payload = getValidPayload(body);
        if (!payload) {
          return json({ error: "Please provide a valid name, email address, and message." }, 400);
        }

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          console.error("Contact email service is not configured.");
          return json({ error: "Server email configuration is missing." }, 500);
        }

        try {
          const resend = new Resend(apiKey);
          const { error } = await resend.emails.send({
            from: "Rishant Portfolio <onboarding@resend.dev>",
            to: ["rikushwaha78.rk@gmail.com"],
            replyTo: payload.email,
            subject: `New portfolio message from ${payload.name}`,
            text: `\nName: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}\n`,
          });

          if (error) {
            console.error("Contact email service rejected a message.");
            return json({ error: "Failed to send message." }, 500);
          }

          return json({ success: true }, 200);
        } catch {
          console.error("Contact form submission failed.");
          return json({ error: "Something went wrong while sending the message." }, 500);
        }
      },
    },
  },
});
