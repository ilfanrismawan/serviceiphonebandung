import type { ReactNode } from "react";

interface TableProps {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
}

/** Tabel liquid glass yang bisa di-scroll horizontal di layar sempit. */
export function Table({ caption, headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl glass-card border border-white/80 shadow-xl">
      <table className="w-full min-w-[520px] border-collapse text-left text-[14.5px]">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-black/8 bg-white/60 backdrop-blur-md text-xs font-semibold text-muted uppercase tracking-wider">
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`px-6 py-4 font-semibold text-ink ${i > 0 ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {rows.map((cells, r) => (
            <tr key={r} className="transition-colors hover:bg-black/[0.02]">
              {cells.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="px-6 py-4 font-semibold text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="px-6 py-4 text-right tabular-nums text-ink/90 font-medium">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
