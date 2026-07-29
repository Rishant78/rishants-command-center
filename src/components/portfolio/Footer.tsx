import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-center">
      <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
        {profile.name} // Session terminated — thanks for playing
      </p>
    </footer>
  );
}
