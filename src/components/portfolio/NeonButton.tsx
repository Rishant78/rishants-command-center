import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const neonButtonVariants = cva(
  "clip-hud relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-3 font-display text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan/15 text-cyan neon-border hover:bg-cyan/25 hover:-translate-y-0.5",
        violet:
          "border border-violet/50 bg-violet/15 text-violet hover:bg-violet/25 hover:-translate-y-0.5",
        ghost:
          "border border-border bg-surface text-foreground hover:border-cyan/60 hover:text-cyan hover:-translate-y-0.5",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-[10px]",
        lg: "px-8 py-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type Props = ComponentPropsWithoutRef<"a"> & VariantProps<typeof neonButtonVariants>;

export function NeonLink({ className, variant, size, ...props }: Props) {
  return <a className={cn(neonButtonVariants({ variant, size }), className)} {...props} />;
}

export function NeonButton({
  className,
  variant,
  size,
  ...props
}: ComponentPropsWithoutRef<"button"> & VariantProps<typeof neonButtonVariants>) {
  return <button className={cn(neonButtonVariants({ variant, size }), className)} {...props} />;
}
