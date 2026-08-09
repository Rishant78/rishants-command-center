import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 text-center bg-background/40">
      <p className="font-sans text-xs text-muted-foreground">
        Designed & Built by {profile.name} • © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
