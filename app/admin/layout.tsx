import type { Metadata } from "next";
import "@/components/nota/nota.css";

export const metadata: Metadata = {
  title: "Administrasi Nota",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main-content">{children}</main>;
}
