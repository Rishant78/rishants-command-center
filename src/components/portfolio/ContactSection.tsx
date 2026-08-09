import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";

import { profile } from "@/data/profile";
import { Section } from "./Section";
import { NeonButton } from "./NeonButton";

const channels = [
  {
    icon: Github,
    label: "GitHub",
    value: "@Rishant78",
    href: profile.links.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Rishant Kushwaha",
    href: profile.links.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.links.location,
    href: null,
  },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const contentType =
        response.headers.get("content-type") || "";

      let data: {
        success?: boolean;
        error?: string;
      } | null = null;

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();

        console.error(
          "Non-JSON response from server:",
          response.status,
          text,
        );

        throw new Error(
          `Server returned an unexpected response (${response.status}).`,
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error || "Failed to send message.",
        );
      }

      if (!data?.success) {
        throw new Error("Message could not be sent.");
      }

      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      index="06"
      title="Let's build something together"
      subtitle="Have a project, opportunity, or idea in mind? Feel free to reach out."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Contact Channels */}
        <motion.ul
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {channels.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/5 text-cyan">
                  <Icon size={18} />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {label}
                  </p>

                  <p className="mt-1 truncate text-sm text-foreground">
                    {value}
                  </p>
                </div>
              </>
            );

            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={
                      href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer noopener"
                    }
                    className="flex items-center gap-4 rounded-xl border border-border bg-card/45 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/35 hover:shadow-[0_8px_30px_rgba(6,182,212,0.06)]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-card/45 p-4">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </motion.ul>

        {/* Contact Form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass space-y-4 rounded-2xl border border-border bg-card/45 p-6"
        >
          <div>
            <label
              htmlFor="name"
              className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={sending}
              className="mt-1.5 w-full rounded-lg border border-border bg-surface-2/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-1 focus:ring-cyan/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={sending}
              className="mt-1.5 w-full rounded-lg border border-border bg-surface-2/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-1 focus:ring-cyan/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={sending}
              className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface-2/40 px-3.5 py-2.5 text-sm text-foreground outline-none transition-all focus:border-cyan focus:ring-1 focus:ring-cyan/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <NeonButton
            type="submit"
            size="lg"
            className="w-full"
            variant={sent ? "violet" : "primary"}
            disabled={sending}
          >
            {sending ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </>
            ) : sent ? (
              <>
                <Check size={14} />
                Message Sent
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </NeonButton>

          {sent && (
            <p className="flex items-center gap-2 font-mono text-[10px] text-cyan">
              <Check size={12} />
              Message sent successfully.
            </p>
          )}

          {error && (
            <p className="flex items-center gap-2 font-mono text-[10px] text-red-400">
              <AlertCircle size={12} />
              {error}
            </p>
          )}

          {!sent && !error && (
            <p className="font-mono text-[10px] text-muted-foreground">
              Messages are delivered directly to my inbox.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}