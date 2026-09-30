import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { IconName } from "@/types";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "inverse" | "link" | "glass";
type Size = "md" | "lg";

const base =
  "group liquid-btn-shimmer relative inline-flex items-center justify-center gap-2.5 font-semibold tracking-[-0.015em] rounded-full overflow-hidden transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent select-none";

const variants: Record<Variant, string> = {
  // Apple Electric Flat Blue Pill (referensi Image 2: "Accept" / "Plant Seed") — Tanpa efek 3D
  primary:
    "bg-[#0071e3] hover:bg-[#0077ed] text-white border border-white/20 shadow-[0_4px_16px_rgba(0,113,227,0.32)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.45)] hover:scale-[1.015]",

  // VisionOS Flat Frosted Glass Pill (referensi Image 2: "Cancel" / "Play") — Tanpa efek 3D
  secondary:
    "bg-gradient-to-b from-white/80 via-white/60 to-[#f0f0f5]/55 text-ink backdrop-blur-2xl border border-white/85 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,1),inset_0_-1px_2px_0_rgba(0,0,0,0.03),0_6px_20px_-2px_rgba(0,0,0,0.06),0_1px_3px_0_rgba(0,0,0,0.02)] hover:bg-white/95 hover:border-white hover:shadow-[inset_0_2px_2px_0_rgba(255,255,255,1),0_10px_28px_-4px_rgba(0,0,0,0.1)] hover:scale-[1.02]",

  // Inverse Flat White Glass for Dark Canvas
  inverse:
    "bg-white hover:bg-white/92 text-ink shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.22)] hover:scale-[1.015]",

  // Pure Flat Translucent Liquid Glass Capsule (referensi Image 1: Figma Liquid Glass Pill) — Tanpa efek 3D
  glass:
    // "bg-white/40 hover:bg-white/60 text-ink backdrop-blur-2xl border border-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:scale-[1.015]",
   "bg-gradient-to-b from-white/45 via-white/20 to-white/35 text-ink backdrop-blur-2xl border border-white/80 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),inset_0_-1.5px_2px_0_rgba(255,255,255,0.25),inset_0_0_14px_0_rgba(255,255,255,0.2),0_8px_28px_-4px_rgba(0,0,0,0.08)] hover:bg-white/60 hover:border-white hover:shadow-[inset_0_2px_2.5px_0_rgba(255,255,255,1),0_14px_36px_-4px_rgba(0,0,0,0.14)] hover:scale-[1.02]",
  // Minimalist flat text link
  link:
    "text-accent hover:text-accent-hover hover:underline underline-offset-4 font-semibold transition-colors",
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
      {/* Specular shimmer beam sweep on hover */}
      {variant !== "link" && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full group-active:translate-x-full"
          aria-hidden="true"
        />
      )}
      {icon && (
        <Icon
          name={icon}
          size={18}
          className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        />
      )}
      <span className="relative z-10">{children}</span>
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
