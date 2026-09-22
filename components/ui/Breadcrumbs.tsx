import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/types";
import { Icon } from "./Icon";

/** Breadcrumb visual + JSON-LD BreadcrumbList sekaligus. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const all: BreadcrumbItem[] = [{ name: "Beranda", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {all.map((item, i) => {
            const isLast = i === all.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-ink hover:underline">
                      {item.name}
                    </Link>
                    <Icon name="chevron" size={14} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
