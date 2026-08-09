import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        console.log("CONTACT API: Request received");
        console.log(
          "CONTACT API: API key exists:",
          Boolean(process.env.RESEND_API_KEY),
        );

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

          console.log("CONTACT API: Creating Resend client");

          const resend = new Resend(process.env.RESEND_API_KEY);

          console.log("CONTACT API: Sending email");

          const { data, error } = await resend.emails.send({
            from: "Rishant Portfolio <onboarding@resend.dev>",
            to: ["rikushwaha78.rk@gmail.com"],
            replyTo: email,
            subject: `New portfolio message from ${name}`,
            text: `Name: ${name}
Email: ${email}

Message:
${message}`,
          });

          if (error) {
            console.error("CONTACT API: Resend error:", error);

            return Response.json(
              {
                error: "Failed to send message.",
                details: error.message,
              },
              { status: 500 },
            );
          }

          console.log("CONTACT API: Email sent successfully");

          return Response.json({
            success: true,
            data,
          });
        } catch (error) {
          console.error("CONTACT API: Error:", error);

          return Response.json(
            {
              error: "Something went wrong while sending the message.",
              details:
                error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});