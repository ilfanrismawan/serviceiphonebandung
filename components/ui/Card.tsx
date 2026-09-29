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
    mist: "bg-mist/75 border border-black/[0.04] hover:bg-mist hover:border-black/[0.08]",
    white: "bg-white/85 border border-black/[0.04] backdrop-blur-md hover:bg-white hover:border-black/[0.08]",
    glass: "glass-card liquid-shimmer hover:bg-white/95 hover:border-white",
  };

  const classes = cn(
    "group relative block overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300",
    toneClasses[tone],
    href &&
      "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
