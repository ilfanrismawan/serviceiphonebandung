import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  /** Jika diisi, seluruh kartu menjadi link. */
  href?: string;
  /** "mist" untuk section putih, "white" untuk section abu-abu, "glass" untuk frosted glass. */
  tone?: "mist" | "white" | "glass";
  className?: string;
}

export function Card({ children, href, tone = "mist", className }: CardProps) {
  const toneClasses = {
    mist: "glass-card liquid-shimmer bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_30px_rgba(0,0,0,0.05)] hover:bg-white/85 hover:border-white",
    white: "glass-card liquid-shimmer bg-white/80 backdrop-blur-2xl border border-white/85 shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_10px_32px_rgba(0,0,0,0.06)] hover:bg-white/92 hover:border-white",
    glass: "glass-card liquid-shimmer bg-white/55 backdrop-blur-2xl border border-white/85 shadow-[inset_0_1.5px_2px_rgba(255,255,255,1),0_14px_40px_rgba(0,0,0,0.08)] hover:bg-white/70 hover:border-white",
  };

  const classes = cn(
    "group relative block overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300",
    toneClasses[tone],
    href &&
      "hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    className,
  );

  const inner = (
    <>
      {/* Specular top highlight line */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent"
        aria-hidden="true"
      />
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
