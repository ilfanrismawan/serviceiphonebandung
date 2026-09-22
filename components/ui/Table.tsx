import type { ReactNode } from "react";

interface TableProps {
  caption: string;
  headers: string[];
  rows: ReactNode[][];
}

/** Tabel generik yang bisa di-scroll horizontal di layar sempit. */
export function Table({ caption, headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white ring-1 ring-black/5">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-black/10 text-muted">
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`px-6 py-4 font-medium ${i > 0 ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, r) => (
            <tr key={r} className="border-b border-black/5 last:border-0">
              {cells.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row" className="px-6 py-4 font-medium text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="px-6 py-4 text-right tabular-nums text-ink">
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
