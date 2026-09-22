import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { IconName } from "@/types";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "inverse" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-accent text-white hover:bg-accent-hover",
  secondary: "rounded-full bg-mist text-ink hover:bg-[#e8e8ed]",
  inverse: "rounded-full bg-white text-ink hover:bg-mist",
  link: "text-accent hover:underline underline-offset-4",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { md: "h-11 px-6 text-[15px]", lg: "h-12 px-7 text-base" },
  secondary: { md: "h-11 px-6 text-[15px]", lg: "h-12 px-7 text-base" },
  inverse: { md: "h-11 px-6 text-[15px]", lg: "h-12 px-7 text-base" },
  link: { md: "text-[15px]", lg: "text-base" },
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
      {icon && <Icon name={icon} size={18} />}
      {children}
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
