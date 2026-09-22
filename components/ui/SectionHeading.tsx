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
        "mb-10 sm:mb-14",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Tag
        id={id}
        className={cn(
          "font-semibold tracking-tight text-ink text-balance",
          Tag === "h1"
            ? "text-4xl leading-[1.08] sm:text-6xl"
            : "text-3xl leading-tight sm:text-5xl",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-muted text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
