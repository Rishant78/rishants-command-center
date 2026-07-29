import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send, Check } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";
import { NeonButton } from "./NeonButton";

const channels = [
  { icon: Github, label: "GitHub", value: "@your-username", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", value: "/in/your-profile", href: profile.links.linkedin },
  { icon: Mail, label: "Email", value: profile.links.email, href: `mailto:${profile.links.email}` },
  { icon: MapPin, label: "Location", value: profile.links.location, href: null },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section
      id="contact"
      index="07"
      title="Contact"
      subtitle="Open a channel — recruiters, collaborators, and clients welcome."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.ul
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {channels.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <span className="glass clip-hud flex items-center gap-4 p-4 transition-colors duration-300 hover:border-cyan/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan/40 bg-cyan/10 text-cyan">
                  <Icon size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {value}
                  </span>
                </span>
              </span>
            );
            return (
              <li key={label}>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer noopener" className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </motion.ul>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass clip-hud space-y-4 p-6"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label
                htmlFor={f.id}
                className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
              >
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="mt-1.5 w-full border border-input bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-cyan focus:shadow-[var(--glow-cyan)]"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="message"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1.5 w-full resize-none border border-input bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-cyan focus:shadow-[var(--glow-cyan)]"
            />
          </div>
          <NeonButton type="submit" size="lg" className="w-full" variant={sent ? "violet" : "primary"}>
            {sent ? (
              <>
                <Check size={14} /> Transmission Sent
              </>
            ) : (
              <>
                <Send size={14} /> Send Message
              </>
            )}
          </NeonButton>
          <p className="font-mono text-[10px] text-muted-foreground">
            Placeholder form — not connected to a backend yet.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}
