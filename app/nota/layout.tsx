import type { Metadata } from "next";
import "@/components/nota/nota.css";
export const metadata: Metadata = {
  title: "Nota Servis",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
};
export default function NotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main-content">{children}</main>;
}
