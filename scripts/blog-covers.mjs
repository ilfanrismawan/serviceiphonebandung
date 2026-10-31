// Gambar sampul artikel blog (ilustrasi 1600x900 WebP), satu gambar unik per artikel.
// Pakai:   node scripts/blog-covers.mjs              -> render semua
//          node scripts/blog-covers.mjs <slug> ...   -> render slug tertentu saja
// Output:  public/images/blog/<slug>.webp  (lalu set `image` dan `imageAlt` di data post).
// Artikel baru: tambahkan entri ke array `covers` (tag, title 2 baris, warna bg, screen, extra).
import { chromium } from "@playwright/test";
import sharp from "sharp";
import path from "node:path";

const outDir = path.resolve("public/images/blog");
const only = process.argv.slice(2);

// Screen area inside phone: 300 x 640 (origin at screen top-left).
const W = 300, H = 640;

const batteryIcon = (x, y, w, h, level, color, stroke = "#fff") => `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h * 0.22}" fill="none" stroke="${stroke}" stroke-width="${h * 0.09}"/>
    <rect x="${x + w}" y="${y + h * 0.3}" width="${h * 0.14}" height="${h * 0.4}" rx="${h * 0.05}" fill="${stroke}"/>
    <rect x="${x + h * 0.14}" y="${y + h * 0.14}" width="${(w - h * 0.28) * level}" height="${h * 0.72}" rx="${h * 0.12}" fill="${color}"/>
  </g>`;

const wave = (cx, cy, r, color, n = 3, gap = 26, sw = 10) =>
  Array.from({ length: n }, (_, i) => {
    const rr = r + i * gap;
    return `<path d="M ${cx + rr * Math.cos(-0.8)} ${cy + rr * Math.sin(-0.8)} A ${rr} ${rr} 0 0 1 ${cx + rr * Math.cos(0.8)} ${cy + rr * Math.sin(0.8)}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" opacity="${1 - i * 0.25}"/>`;
  }).join("");

const thermometer = (x, y, s, fill) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-14" y="-90" width="28" height="110" rx="14" fill="#fff"/>
    <circle cx="0" cy="34" r="30" fill="#fff"/>
    <rect x="-6" y="-60" width="12" height="90" rx="6" fill="${fill}"/>
    <circle cx="0" cy="34" r="20" fill="${fill}"/>
    <g stroke="#fff" stroke-width="5" stroke-linecap="round"><line x1="24" y1="-70" x2="40" y2="-70"/><line x1="24" y1="-46" x2="36" y2="-46"/><line x1="24" y1="-22" x2="40" y2="-22"/></g>
  </g>`;

const badge = (x, y, r, color, inner) => `
  <g transform="translate(${x} ${y})" filter="url(#soft)">
    <circle r="${r}" fill="${color}"/>
    ${inner}
  </g>`;

const covers = [
  {
    slug: "cara-cek-iphone-bekas-sebelum-beli-di-bandung",
    tag: "TIPS BELI", title: ["Cek iPhone Bekas", "Sebelum Beli"],
    bg: ["#0f3d3e", "#1f6f68"], accent: "#ffd166",
    screen: `
      <rect width="${W}" height="${H}" fill="#f4f1ea"/>
      <text x="30" y="80" font-size="26" font-weight="700" fill="#0f3d3e">Checklist</text>
      ${["IMEI terdaftar", "True Tone", "Face ID", "Battery Health", "Kamera & mic"].map((t, i) => `
        <g transform="translate(30 ${130 + i * 86})">
          <rect width="44" height="44" rx="12" fill="${i < 4 ? "#1f6f68" : "#d9d3c7"}"/>
          ${i < 4 ? `<path d="M11 23 l8 8 l15 -17" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
          <text x="62" y="31" font-size="22" fill="#2b2b2b">${t}</text>
        </g>`).join("")}`,
    extra: `
      <g transform="translate(1390 640) rotate(-20)" filter="url(#soft)">
        <circle r="92" fill="none" stroke="#ffd166" stroke-width="26"/>
        <circle r="78" fill="#ffffff" opacity="0.18"/>
        <rect x="-16" y="100" width="32" height="150" rx="16" fill="#ffd166"/>
      </g>`,
  },
  {
    slug: "suara-speaker-dan-earpiece-iphone-kecil-atau-kresek",
    tag: "AUDIO", title: ["Suara iPhone", "Kecil atau Kresek?"],
    bg: ["#2d1b69", "#5b3fc4"], accent: "#7ee8fa",
    screen: `
      <rect width="${W}" height="${H}" fill="#140c33"/>
      <rect x="110" y="26" width="80" height="12" rx="6" fill="#7ee8fa" opacity="0.9"/>
      ${Array.from({ length: 21 }, (_, i) => { const h = [40, 90, 150, 70, 200, 120, 60, 170, 230, 110, 260, 140, 80, 190, 100, 220, 70, 130, 50, 90, 30][i]; return `<rect x="${24 + i * 12.5}" y="${330 - h / 2}" width="7" height="${h}" rx="3.5" fill="#7ee8fa" opacity="${0.45 + (i % 4) * 0.15}"/>`; }).join("")}
      <g fill="#7ee8fa">${Array.from({ length: 6 }, (_, i) => `<circle cx="${110 + i * 16}" cy="610" r="4"/>`).join("")}</g>`,
    extra: `<g filter="url(#soft)">${wave(1180, 380, 70, "#7ee8fa", 3, 34, 14)}${wave(1180, 660, 50, "#ffffff", 2, 30, 10)}</g>`,
  },
  {
    slug: "face-id-iphone-tidak-berfungsi-penyebab-dan-solusi",
    tag: "FACE ID", title: ["Face ID iPhone", "Tidak Berfungsi?"],
    bg: ["#03263b", "#0b5e86"], accent: "#5eead4",
    screen: `
      <rect width="${W}" height="${H}" fill="#06131d"/>
      <g transform="translate(150 300)" stroke="#5eead4" stroke-width="9" fill="none" stroke-linecap="round">
        <path d="M-90 -50 v-40 h40"/><path d="M90 -50 v-40 h-40"/><path d="M-90 50 v40 h40"/><path d="M90 50 v40 h-40"/>
        <path d="M-30 -25 v14"/><path d="M30 -25 v14"/><path d="M0 -20 v34 h-10"/><path d="M-32 40 q32 26 64 0"/>
      </g>
      <text x="150" y="470" text-anchor="middle" font-size="22" fill="#9fb8c6">Face ID tidak tersedia</text>`,
    extra: badge(1380, 660, 70, "#f25f5c", `<path d="M-24 -24 L24 24 M24 -24 L-24 24" stroke="#fff" stroke-width="12" stroke-linecap="round"/>`),
  },
  {
    slug: "layar-iphone-green-screen-white-screen-solusi",
    tag: "LAYAR", title: ["Green Screen &", "White Screen iPhone"],
    bg: ["#14342b", "#2e7d5b"], accent: "#b8ff6b",
    screen: `
      <rect width="${W}" height="${H / 2}" fill="#39e27a"/>
      <rect y="${H / 2}" width="${W}" height="${H / 2}" fill="#f8faf8"/>
      ${[40, 95, 120, 210, 260].map((x) => `<rect x="${x}" width="5" height="${H}" fill="#1aa851" opacity="0.6"/>`).join("")}
      <rect y="${H / 2 - 3}" width="${W}" height="6" fill="#c9f7d8"/>`,
    extra: `<g filter="url(#soft)"><rect x="1300" y="560" width="140" height="140" rx="30" fill="#39e27a"/><rect x="1340" y="600" width="140" height="140" rx="30" fill="#ffffff"/></g>`,
  },
  {
    slug: "layar-iphone-blank-hitam-tapi-nyala",
    tag: "LAYAR", title: ["Layar iPhone Hitam", "Tapi Masih Nyala"],
    bg: ["#111827", "#374151"], accent: "#fbbf24",
    screen: `
      <rect width="${W}" height="${H}" fill="#000"/>
      <circle cx="150" cy="320" r="70" fill="#fbbf24" opacity="0.08"/>
      <g transform="translate(150 320)" fill="none" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" opacity="0.9">
        <path d="M-30 18 h60 l-8 -12 v-22 a22 22 0 0 0 -44 0 v22 z"/><path d="M-8 30 a8 8 0 0 0 16 0"/>
      </g>
      <text x="150" y="430" text-anchor="middle" font-size="20" fill="#6b7280">bunyi notifikasi masih masuk</text>`,
    extra: `<g filter="url(#soft)">${wave(1170, 420, 60, "#fbbf24", 3, 30, 12)}</g>`,
  },
  {
    slug: "iphone-tidak-bisa-dicas-penyebab-dan-solusi",
    tag: "CHARGING", title: ["iPhone Tidak", "Bisa Dicas?"],
    bg: ["#3b1d0f", "#b5541c"], accent: "#ffe08a",
    screen: `
      <rect width="${W}" height="${H}" fill="#1c0f08"/>
      ${batteryIcon(60, 270, 160, 80, 0.08, "#ef4444")}
      <path d="M150 400 l-26 46 h22 l-10 40 l36 -54 h-22 l12 -32 z" fill="#ffe08a" opacity="0.35"/>`,
    extra: `
      <g filter="url(#soft)">
        <path d="M1330 900 C1330 760 1250 760 1250 650" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round"/>
        <rect x="1222" y="580" width="56" height="84" rx="12" fill="#fff"/>
        <rect x="1238" y="548" width="24" height="40" rx="5" fill="#d9d9d9"/>
        ${badge(1400, 560, 54, "#ef4444", `<path d="M-18 -18 L18 18 M18 -18 L-18 18" stroke="#fff" stroke-width="10" stroke-linecap="round"/>`)}
      </g>`,
  },
  {
    slug: "iphone-stuck-logo-apple-cara-mengatasi",
    tag: "SOFTWARE", title: ["iPhone Stuck", "di Logo (Bootloop)"],
    bg: ["#0b0b0f", "#2a2a35"], accent: "#a5b4fc",
    screen: `
      <rect width="${W}" height="${H}" fill="#000"/>
      <circle cx="150" cy="300" r="46" fill="#f5f5f5"/>
      <rect x="90" y="420" width="120" height="8" rx="4" fill="#333"/>
      <rect x="90" y="420" width="38" height="8" rx="4" fill="#f5f5f5"/>`,
    extra: `
      <g transform="translate(1380 640)" filter="url(#soft)" fill="none" stroke="#a5b4fc" stroke-width="18" stroke-linecap="round">
        <path d="M-70 -10 A70 70 0 0 1 60 -36"/><path d="M60 -36 l6 -40 M60 -36 l-38 -10"/>
        <path d="M70 10 A70 70 0 0 1 -60 36"/><path d="M-60 36 l-6 40 M-60 36 l38 10"/>
      </g>`,
  },
  {
    slug: "kamera-belakang-iphone-bergetar-dan-bunyi",
    tag: "KAMERA", title: ["Kamera iPhone", "Bergetar & Bunyi"],
    bg: ["#1e293b", "#475569"], accent: "#fda4af",
    phoneBack: true,
    screen: `
      <rect width="${W}" height="${H}" fill="#cbd5e1"/>
      <rect x="22" y="22" width="150" height="150" rx="38" fill="#94a3b8"/>
      ${[[62, 62], [132, 62], [62, 132]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="30" fill="#0f172a"/><circle cx="${x}" cy="${y}" r="14" fill="#334155"/><circle cx="${x - 5}" cy="${y - 5}" r="4" fill="#94a3b8"/>`).join("")}
      <circle cx="132" cy="132" r="9" fill="#fef3c7"/>
      <g stroke="#e11d48" stroke-width="6" fill="none" stroke-linecap="round">
        <path d="M190 40 q10 10 0 20 q-10 10 0 20 q10 10 0 20"/><path d="M214 30 q12 12 0 24 q-12 12 0 24 q12 12 0 24 q-12 12 0 24"/>
      </g>`,
    extra: `<g filter="url(#soft)">${wave(1180, 300, 50, "#fda4af", 3, 28, 12)}</g>`,
  },
  {
    slug: "baterai-iphone-boros-setelah-update-ios-27",
    tag: "BATERAI", title: ["Baterai Boros", "Setelah Update iOS"],
    bg: ["#1d2b53", "#3a56b5"], accent: "#ffcc4d",
    screen: `
      <rect width="${W}" height="${H}" fill="#0e1630"/>
      <g transform="translate(150 230)" fill="none" stroke="#ffcc4d" stroke-width="12" stroke-linecap="round">
        <path d="M-60 0 A60 60 0 1 1 0 60"/><path d="M0 60 l-26 -14 M0 60 l-10 28"/>
      </g>
      <text x="150" y="360" text-anchor="middle" font-size="22" fill="#9db0e6">Mengunduh pembaruan…</text>
      ${batteryIcon(80, 430, 120, 60, 0.18, "#ef4444")}
      <text x="150" y="540" text-anchor="middle" font-size="30" font-weight="700" fill="#ef4444">12%</text>`,
    extra: badge(1400, 640, 64, "#ffcc4d", `<path d="M-6 -36 h12 l-2 46 h-8 z M0 24 a7 7 0 1 1 0.1 0" fill="#1d2b53"/>`),
  },
  {
    slug: "kapan-baterai-iphone-perlu-diganti",
    tag: "BATERAI", title: ["Kapan Baterai iPhone", "Perlu Diganti?"],
    bg: ["#064e3b", "#0f9d74"], accent: "#fef08a",
    screen: `
      <rect width="${W}" height="${H}" fill="#f0fdf4"/>
      <text x="30" y="80" font-size="24" font-weight="700" fill="#064e3b">Kesehatan Baterai</text>
      <g transform="translate(150 290)">
        <circle r="96" fill="none" stroke="#d1fae5" stroke-width="26"/>
        <circle r="96" fill="none" stroke="#f59e0b" stroke-width="26" stroke-dasharray="${2 * Math.PI * 96 * 0.79} 999" transform="rotate(-90)" stroke-linecap="round"/>
        <text y="16" text-anchor="middle" font-size="52" font-weight="800" fill="#064e3b">79%</text>
      </g>
      <text x="150" y="460" text-anchor="middle" font-size="20" fill="#065f46">Kapasitas Maksimum</text>
      <rect x="30" y="510" width="240" height="64" rx="16" fill="#fef3c7"/>
      <text x="150" y="550" text-anchor="middle" font-size="19" fill="#92400e">Disarankan servis</text>`,
    extra: `<g filter="url(#soft)">${batteryIcon(1250, 600, 170, 84, 0.45, "#fef08a")}</g>`,
  },
  {
    slug: "biaya-service-iphone-mati-total-bandung",
    tag: "MATI TOTAL", title: ["Biaya Service iPhone", "Mati Total"],
    bg: ["#18181b", "#52525b"], accent: "#34d399",
    screen: `
      <rect width="${W}" height="${H}" fill="#050505"/>
      <g transform="translate(150 320)" fill="none" stroke="#3f3f46" stroke-width="14" stroke-linecap="round">
        <path d="M-44 -38 A62 62 0 1 0 44 -38"/><path d="M0 -70 v62"/>
      </g>`,
    extra: `
      <g filter="url(#soft)">
        <rect x="1240" y="560" width="230" height="150" rx="28" fill="#fff"/>
        <text x="1355" y="620" text-anchor="middle" font-size="30" font-weight="700" fill="#18181b">Diagnosa</text>
        <text x="1355" y="668" text-anchor="middle" font-size="30" font-weight="700" fill="#059669">dulu</text>
        ${badge(1460, 560, 40, "#34d399", `<path d="M-16 0 l10 10 l20 -22" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`)}
      </g>`,
  },
  {
    slug: "masalah-iphone-18-pro-panas-restart-cat-pudar",
    tag: "IPHONE 18 PRO", title: ["Panas, Restart,", "dan Cat Pudar"],
    bg: ["#3d2a14", "#a86b2d"], accent: "#ffd8a8",
    phoneBack: true,
    screen: `
      <defs><linearGradient id="fade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c2723a"/><stop offset="0.55" stop-color="#d9a273"/><stop offset="1" stop-color="#efe1d1"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#fade)"/>
      <rect x="22" y="22" width="170" height="170" rx="42" fill="#b06430"/>
      ${[[66, 66], [146, 66], [66, 146]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="32" fill="#1c1917"/><circle cx="${x}" cy="${y}" r="15" fill="#3f3a36"/>`).join("")}`,
    extra: `
      <g filter="url(#soft)">${thermometer(1240, 600, 1, "#ef4444")}</g>
      <g transform="translate(1420 660)" filter="url(#soft)" fill="none" stroke="#ffd8a8" stroke-width="16" stroke-linecap="round">
        <path d="M-50 0 A50 50 0 1 1 0 50"/><path d="M0 50 l-24 -10 M0 50 l-8 24"/>
      </g>`,
  },
  {
    slug: "ganti-baterai-iphone-resmi-vs-servis-luar",
    tag: "PERBANDINGAN", title: ["Ganti Baterai:", "Resmi vs Servis Luar"],
    bg: ["#0c4a6e", "#0e7490"], accent: "#fde68a",
    screen: `
      <rect width="${W}" height="${H}" fill="#ecfeff"/>
      <g transform="translate(40 150)">${batteryIcon(0, 0, 140, 70, 1, "#0e7490", "#0c4a6e")}<text x="0" y="120" font-size="22" font-weight="700" fill="#0c4a6e">Servis resmi</text></g>
      <text x="150" y="350" text-anchor="middle" font-size="40" font-weight="800" fill="#f59e0b">VS</text>
      <g transform="translate(40 410)">${batteryIcon(0, 0, 140, 70, 1, "#f59e0b", "#0c4a6e")}<text x="0" y="120" font-size="22" font-weight="700" fill="#0c4a6e">Servis independen</text></g>`,
    extra: `
      ${badge(1400, 650, 70, "#fde68a", `<text y="16" text-anchor="middle" font-size="46" font-weight="800" fill="#0c4a6e">VS</text>`)}`,
  },
  {
    slug: "iphone-panas-wajar-atau-rusak-kapan-perlu-servis",
    tag: "SUHU", title: ["iPhone Panas:", "Wajar atau Rusak?"],
    bg: ["#7f1d1d", "#ea580c"], accent: "#fff1c1",
    screen: `
      <rect width="${W}" height="${H}" fill="#1f0a05"/>
      ${thermometer(150, 300, 1.4, "#f97316")}
      <rect x="40" y="470" width="220" height="70" rx="18" fill="#3b1208"/>
      <text x="150" y="514" text-anchor="middle" font-size="20" fill="#fdba74">iPhone perlu didinginkan</text>`,
    extra: `
      <g filter="url(#soft)" fill="none" stroke="#fff1c1" stroke-width="14" stroke-linecap="round">
        <path d="M1260 720 q-24 -40 0 -80 q24 -40 0 -80"/><path d="M1340 720 q-24 -40 0 -80 q24 -40 0 -80"/><path d="M1420 720 q-24 -40 0 -80 q24 -40 0 -80"/>
      </g>`,
  },
  {
    slug: "pesan-baterai-penting-iphone-setelah-ganti-baterai",
    tag: "BATERAI", title: ["Arti Pesan", "Baterai Penting"],
    bg: ["#422006", "#a16207"], accent: "#fde047",
    screen: `
      <rect width="${W}" height="${H}" fill="#f5f5f4"/>
      <rect x="18" y="180" width="264" height="240" rx="26" fill="#fff" stroke="#e7e5e4" stroke-width="2"/>
      <g transform="translate(150 240)"><path d="M0 -34 L36 30 H-36 Z" fill="#f59e0b"/><rect x="-4" y="-12" width="8" height="24" rx="4" fill="#fff"/><circle cy="20" r="4.5" fill="#fff"/></g>
      <text x="150" y="315" text-anchor="middle" font-size="22" font-weight="700" fill="#1c1917">Pesan Baterai Penting</text>
      <text x="150" y="350" text-anchor="middle" font-size="16" fill="#57534e">Tidak dapat memverifikasi</text>
      <text x="150" y="374" text-anchor="middle" font-size="16" fill="#57534e">baterai asli Apple</text>`,
    extra: `<g filter="url(#soft)">${batteryIcon(1250, 600, 170, 84, 0.9, "#fde047")}</g>`,
  },
  {
    slug: "iphone-duo-layar-retak-garansi-biaya-ganti-layar",
    tag: "IPHONE DUO", title: ["Layar Lipat Retak", "di Engsel"],
    bg: ["#0b1324", "#1e3a8a"], accent: "#fbbf24",
    screen: `
      <defs><linearGradient id="duoL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0e7490"/></linearGradient>
      <linearGradient id="duoC" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="0.5" stop-color="#000" stop-opacity="0.45"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#duoL)"/>
      <g fill="#fff" fill-opacity="0.18"><rect x="22" y="70" width="110" height="120" rx="20"/><rect x="168" y="70" width="110" height="250" rx="20"/><rect x="22" y="210" width="110" height="110" rx="20"/><rect x="22" y="350" width="256" height="140" rx="20"/></g>
      <rect x="125" y="0" width="50" height="${H}" fill="url(#duoC)"/>
      <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
        <path d="M150 230 L143 280 L157 325 L145 370 L158 420 L147 470 L154 520 L150 600" stroke-width="5"/>
        <path d="M143 280 L95 268 L60 282" stroke-width="3"/><path d="M157 325 L205 312 L245 330" stroke-width="3"/>
        <path d="M145 370 L100 400 L55 396" stroke-width="3"/><path d="M158 420 L210 450 L250 440" stroke-width="3"/>
        <path d="M147 470 L110 510" stroke-width="2.5"/><path d="M154 520 L200 548" stroke-width="2.5"/>
      </g>`,
    extra: `
      ${badge(1420, 640, 72, "#fbbf24", `<rect x="-7" y="-36" width="14" height="46" rx="7" fill="#0b1324"/><circle cy="26" r="9" fill="#0b1324"/>`)}`,
  },
  {
    slug: "layar-iphone-tidak-bisa-disentuh-setelah-update-ios-27",
    tag: "IOS 27", title: ["Layar Tidak", "Bisa Disentuh?"],
    bg: ["#1e1b4b", "#4338ca"], accent: "#a5b4fc",
    screen: `
      <defs><linearGradient id="ios27" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f7cff"/><stop offset="0.6" stop-color="#7b5cff"/><stop offset="1" stop-color="#d94fb0"/></linearGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#ios27)"/>
      <g fill="#fff" fill-opacity="0.55">${Array.from({ length: 12 }, (_, i) => `<rect x="${30 + (i % 4) * 64}" y="${80 + Math.floor(i / 4) * 80}" width="48" height="48" rx="13"/>`).join("")}</g>
      <rect width="${W}" height="${H}" fill="#0b1020" opacity="0.35"/>
      <g transform="translate(150 430)"><circle r="46" fill="none" stroke="#fff" stroke-opacity="0.3" stroke-width="9"/><path d="M0 -46 A46 46 0 0 1 40 23" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/></g>
      <g transform="translate(206 210)"><circle r="26" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="4"/><circle r="52" fill="none" stroke="#fff" stroke-opacity="0.5" stroke-width="3" stroke-dasharray="8 10"/></g>`,
    extra: `
      ${badge(1420, 640, 72, "#ef4444", `<path d="M-26 -26 L26 26 M26 -26 L-26 26" stroke="#fff" stroke-width="14" stroke-linecap="round"/>`)}`,
  },
];

const svgFor = (c) => {
  const [l1, l2] = c.title;
  const phoneX = 930, phoneY = 110;
  return `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0}svg{display:block}</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" font-family="Inter, 'Inter Display', sans-serif">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.bg[0]}"/><stop offset="1" stop-color="${c.bg[1]}"/></linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.45" r="0.5"><stop offset="0" stop-color="#fff" stop-opacity="0.18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#fff" opacity="0.08"/></pattern>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity="0.28"/></filter>
    <clipPath id="scr"><rect width="${W}" height="${H}" rx="36"/></clipPath>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#dots)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>

  <g transform="translate(${phoneX} ${phoneY}) rotate(-7 170 340)" filter="url(#soft)">
    <rect x="-20" y="-20" width="${W + 40}" height="${H + 40}" rx="56" fill="#111"/>
    <rect x="-14" y="-14" width="${W + 28}" height="${H + 28}" rx="50" fill="none" stroke="#3a3a3a" stroke-width="3"/>
    <g clip-path="url(#scr)">${c.screen}</g>
    ${c.phoneBack ? "" : `<rect x="${W / 2 - 52}" y="14" width="104" height="30" rx="15" fill="#000"/>`}
  </g>
  ${c.extra}

  <g transform="translate(110 0)">
    <rect y="250" width="${c.tag.length * 15 + 48}" height="52" rx="26" fill="${c.accent}"/>
    <text x="24" y="285" font-size="22" font-weight="700" letter-spacing="2" fill="${c.bg[0]}">${c.tag}</text>
    <text class="t" y="410" font-family="'Inter Display', Inter, sans-serif" font-size="78" font-weight="800" fill="#fff">${l1}</text>
    <text class="t" y="502" font-family="'Inter Display', Inter, sans-serif" font-size="78" font-weight="800" fill="#fff">${l2}</text>
    <rect y="560" width="90" height="8" rx="4" fill="${c.accent}"/>
    <text y="660" font-size="26" font-weight="600" fill="#fff" opacity="0.85">Service iPhone Bandung</text>
    <text y="698" font-size="22" fill="#fff" opacity="0.6">Jl. Dipati Ukur No. 86</text>
  </g>
</svg><script>for(const t of document.querySelectorAll('.t')){const w=t.getComputedTextLength();if(w>700){t.setAttribute('font-size',String(Math.floor(78*700/w)))}}</script></body></html>`;
};

// CHROMIUM_PATH: pakai Chromium yang sudah terpasang bila versi browser Playwright belum diunduh.
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
for (const c of covers.filter((c) => only.length === 0 || only.includes(c.slug))) {
  await page.setContent(svgFor(c));
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot();
  await sharp(png).webp({ quality: 82, effort: 6 }).toFile(path.join(outDir, `${c.slug}.webp`));
  console.log(c.slug);
}
await browser.close();
