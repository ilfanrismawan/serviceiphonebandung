import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  /** Latar belakang section. "mist" = abu-abu Apple. */
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
      className={cn("py-16 sm:py-24", tone === "mist" && "bg-mist", className)}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}
