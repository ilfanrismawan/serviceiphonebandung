import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  description?: string;
  id?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  id,
  as: Tag = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Tag
        id={id}
        className={cn(
          "font-bold tracking-[-0.03em] text-ink text-balance",
          Tag === "h1"
            ? "text-4xl leading-[1.08] sm:text-6xl sm:leading-[1.04]"
            : "text-2xl leading-tight sm:text-4xl sm:leading-[1.12]",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-muted font-normal text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
