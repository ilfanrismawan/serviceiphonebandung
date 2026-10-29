"use client";
import { useState } from "react";

export function ReceiptActions({
  token,
  defaultPaper,
}: {
  token: string;
  defaultPaper: string;
}) {
  const [paper, setPaper] = useState(defaultPaper);
  function print() {
    const style = document.createElement("style");
    style.textContent = `@media print { @page { size: ${paper === "a4" ? "A4" : `${paper}mm 297mm`}; margin: ${paper === "a4" ? "15mm" : "3mm"}; } }`;
    document.head.appendChild(style);
    document
      .querySelector(".nota-public")
      ?.classList.toggle("nota-thermal", paper !== "a4");
    const cleanup = () => {
      style.remove();
      document.querySelector(".nota-public")?.classList.remove("nota-thermal");
    };
    window.addEventListener("afterprint", cleanup, { once: true });
    window.print();
  }
  return (
    <div className="nota-print-controls nota-no-print">
      <select
        aria-label="Ukuran kertas"
        value={paper}
        onChange={(e) => setPaper(e.target.value)}
      >
        <option value="a4">A4</option>
        <option value="80">Thermal 80 mm</option>
        <option value="58">Thermal 58 mm</option>
      </select>
      <button onClick={print} className="nota-btn secondary">
        Cetak
      </button>
      <a className="nota-btn" href={`/nota/${token}/pdf?paper=${paper}`}>
        Unduh PDF ↓
      </a>
      <button
        className="nota-btn secondary"
        onClick={() => window.location.reload()}
        aria-label="Perbarui status nota"
      >
        ↻ Perbarui
      </button>
    </div>
  );
}
