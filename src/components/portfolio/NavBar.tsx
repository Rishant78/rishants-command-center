import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function NavBar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.45;

      let currentSection = "home";

      for (const { id } of NAV_ITEMS) {
        const element = document.getElementById(id);

        if (!element) continue;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = id;
          break;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection,
      );

      window.removeEventListener(
        "resize",
        updateActiveSection,
      );
    };
  }, []);

  const go = (id: string) => {
    setActive(id);
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
      aria-label="Primary"
    >
      <div className="glass mx-auto mt-3 flex w-[min(1100px,94vw)] items-center justify-between px-4 py-3">
        <button
          onClick={() => go("home")}
          className="font-sans text-sm font-bold tracking-[0.12em] text-cyan hover:opacity-85 transition-opacity"
        >
          Rishant Kushwaha
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  "relative px-3 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
                  active === item.id
                    ? "text-cyan"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}

                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-px bg-cyan"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="p-2 text-cyan lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 grid w-[min(1100px,94vw)] grid-cols-2 gap-1 p-3 lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  "w-full px-3 py-2 text-left text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
                  active === item.id
                    ? "text-cyan"
                    : "text-muted-foreground hover:text-cyan",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}