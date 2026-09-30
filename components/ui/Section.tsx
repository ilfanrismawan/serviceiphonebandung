import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  /** Latar belakang section. "mist" = panel kaca frosted liquid glass. */
  tone?: "white" | "mist";
  id?: string;
  labelledBy?: string;
  size?: "narrow" | "default";
  className?: string;
}

export function Section({
  children,
  tone = "white",
  id,
  labelledBy,
  size = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "relative overflow-hidden py-16 sm:py-24",
        tone === "mist" ? "liquid-section-pane" : "relative",
        className,
      )}
    >
      {/* Specular top highlight for frosted glass sections */}
      {tone === "mist" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Ambient background refraction glows — agar efek liquid glass di kartu & komponen berpendar jelas */}
      <div
        className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-blue-500/[0.09] blur-3xl liquid-aurora"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-amber-400/[0.08] blur-3xl liquid-aurora-delayed"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-500/[0.07] blur-3xl liquid-aurora-slow"
        aria-hidden="true"
      />

      <Container size={size} className="relative z-10">{children}</Container>
    </section>
  );
}
