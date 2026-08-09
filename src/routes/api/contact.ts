import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          // Parse request body safely
          const body = await request.text();
          const { name, email, message } = JSON.parse(body);

          // Validate fields
          if (!name || !email || !message) {
            return Response.json(
              {
                error: "Name, email, and message are required.",
              },
              { status: 400 },
            );
          }

          // Check API key
          const apiKey = process.env.RESEND_API_KEY;

          if (!apiKey) {
            console.error("RESEND_API_KEY is missing");

            return Response.json(
              {
                error: "Server configuration error.",
              },
              { status: 500 },
            );
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

            return Response.json(
              {
                error: "Failed to send message.",
              },
              { status: 500 },
            );
          }

          return Response.json({
            success: true,
            data,
          });
        } catch (error) {
          console.error("Contact form error:", error);

          return Response.json(
            {
              error: "Something went wrong while sending the message.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});