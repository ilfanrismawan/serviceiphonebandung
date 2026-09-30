import type { Faq } from "@/types";
import { Icon } from "./Icon";

/** Accordion liquid glass berbasis <details>: aksesibel, tanpa JavaScript. */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group glass-card liquid-shimmer overflow-hidden rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-[15px] sm:text-[17px] font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-muted transition-transform duration-300 group-open:rotate-90 group-open:bg-accent/10 group-open:text-accent">
              <Icon name="chevron" size={17} />
            </div>
          </summary>
          <p className="mt-3.5 leading-relaxed text-[13.5px] sm:text-[15px] text-muted/90 border-t border-black/5 pt-3.5">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
