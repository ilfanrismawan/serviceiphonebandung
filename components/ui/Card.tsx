import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  /** Jika diisi, seluruh kartu menjadi link. */
  href?: string;
  /** "mist" untuk section putih, "white" untuk section abu-abu. */
  tone?: "mist" | "white";
  className?: string;
}

export function Card({ children, href, tone = "mist", className }: CardProps) {
  const classes = cn(
    "group block rounded-3xl p-6 sm:p-7 transition-all duration-300",
    tone === "mist" ? "bg-mist hover:bg-[#efeff2]" : "bg-white hover:bg-mist/50",
    href &&
      "hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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
