import type { Faq } from "@/types";
import { Icon } from "./Icon";

/** Accordion berbasis <details>: aksesibel, tanpa JavaScript. */
export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
            {item.question}
            <Icon
              name="chevron"
              size={20}
              className="shrink-0 text-muted transition-transform group-open:rotate-90"
            />
          </summary>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
