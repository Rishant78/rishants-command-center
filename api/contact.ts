import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return res.status(500).json({
        error: "Server email configuration is missing.",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Rishant Portfolio <onboarding@resend.dev>",
      to: ["rikushwaha78.rk@gmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        error: "Failed to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      error: "Something went wrong while sending the message.",
    });
  }
}
