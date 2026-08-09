import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, message } = await request.json();

          if (!name || !email || !message) {
            return Response.json(
              {
                error: "Name, email, and message are required.",
              },
              { status: 400 },
            );
          }

          const resend = new Resend(process.env.RESEND_API_KEY);

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