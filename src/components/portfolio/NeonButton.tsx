import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export const neonButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-cyan/30 bg-cyan/10 text-cyan hover:bg-cyan/20 hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:-translate-y-0.5",
        violet:
          "border-violet/30 bg-violet/10 text-violet hover:bg-violet/20 hover:border-violet/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:-translate-y-0.5",
        ghost:
          "border-border bg-surface text-foreground/85 hover:border-cyan/30 hover:text-cyan hover:bg-surface-2 hover:-translate-y-0.5",
      },
      size: {
        default: "",
        sm: "px-4 py-1.5 text-[10px] tracking-[0.08em]",
        lg: "px-7 py-3 text-sm tracking-[0.12em]",
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
