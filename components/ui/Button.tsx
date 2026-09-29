import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { IconName } from "@/types";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "inverse" | "link" | "glass";
type Size = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight overflow-hidden transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent select-none";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-gradient-to-b from-[#0077ED]/95 via-[#0071E3] to-[#0062C4] text-white border border-white/25 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_16px_rgba(0,113,227,0.32),0_1px_2px_rgba(0,0,0,0.1)] hover:from-[#1483F2] hover:to-[#006BD6] hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.65),0_6px_22px_rgba(0,113,227,0.45)] hover:border-white/40",
  secondary:
    "rounded-full bg-gradient-to-b from-white/90 to-white/65 text-ink border border-white/80 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:bg-white/95 hover:border-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_16px_rgba(0,0,0,0.08)]",
  inverse:
    "rounded-full bg-gradient-to-b from-white/95 to-white/85 text-ink border border-white/90 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_20px_rgba(0,0,0,0.18)] hover:bg-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_6px_28px_rgba(0,0,0,0.25)]",
  link:
    "text-accent hover:text-accent-hover hover:underline underline-offset-4 font-medium transition-colors",
  glass:
    "rounded-full bg-gradient-to-b from-white/65 to-white/40 text-ink border border-white/70 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_2px_10px_rgba(0,0,0,0.03)] hover:bg-white/80 hover:border-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_6px_20px_rgba(0,0,0,0.06)]",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { md: "h-11 px-6 text-[14px]", lg: "h-12 px-7 text-[15px]" },
  secondary: { md: "h-11 px-6 text-[14px]", lg: "h-12 px-7 text-[15px]" },
  inverse: { md: "h-11 px-6 text-[14px]", lg: "h-12 px-7 text-[15px]" },
  link: { md: "text-[14px]", lg: "text-[15px]" },
  glass: { md: "h-11 px-6 text-[14px]", lg: "h-12 px-7 text-[15px]" },
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return cn(base, variants[variant], sizes[variant][size]);
}

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Link keluar (WhatsApp, Maps): dibuka di tab baru. */
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  external,
  className,
}: ButtonProps) {
  const classes = cn(buttonClasses(variant, size), className);
  const content = (
    <>
      {/* Subtle specular sheen sweep on hover */}
      {variant !== "link" && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full group-active:translate-x-full"
          aria-hidden="true"
        />
      )}
      {icon && <Icon name={icon} size={18} className="shrink-0 transition-transform duration-200" />}
      <span>{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
