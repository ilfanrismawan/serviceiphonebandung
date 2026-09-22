import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  /** "narrow" untuk teks panjang (artikel), "default" untuk grid. */
  size?: "narrow" | "default";
  className?: string;
}

export function Container({
  children,
  as: Tag = "div",
  size = "default",
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "default" ? "max-w-[1080px]" : "max-w-[720px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
