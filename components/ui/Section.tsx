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
        "relative py-16 sm:py-24",
        tone === "mist" ? "liquid-section-pane" : "relative",
        className,
      )}
    >
      {/* Specular top highlight for frosted glass sections */}
      {tone === "mist" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          aria-hidden="true"
        />
      )}
      <Container size={size}>{children}</Container>
    </section>
  );
}
