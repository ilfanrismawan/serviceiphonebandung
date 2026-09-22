import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — Service iPhone Bandung Bergaransi`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#1d1d1f",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              height: "48px",
              width: "48px",
              borderRadius: "14px",
              backgroundColor: "#0071e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            iS
          </div>
          <span style={{ fontSize: "28px", fontWeight: "bold", color: "#ffffff" }}>
            {siteConfig.name}
          </span>
          <span
            style={{
              marginLeft: "12px",
              fontSize: "18px",
              color: "#60a5fa",
              backgroundColor: "rgba(0, 113, 227, 0.25)",
              padding: "6px 16px",
              borderRadius: "100px",
            }}
          >
            {siteConfig.address.city}, Jawa Barat
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Service iPhone Bandung, Tanpa Tebak-tebakan Harga.
          </h1>
          <p style={{ fontSize: "24px", color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
            Diagnosa 100% Gratis • Bisa Ditunggu • Garansi Hingga 90 Hari
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          {["Ganti LCD OLED", "Ganti Baterai", "Kamera Belakang", "Mati Total & Kena Air"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: "18px",
                  color: "#ffffff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "8px 18px",
                  borderRadius: "12px",
                }}
              >
                • {item}
              </span>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
