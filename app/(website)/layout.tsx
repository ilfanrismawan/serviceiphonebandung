import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema()} />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyWhatsApp />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18534863324"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18534863324');
    `}</Script>
      <Analytics />
    </>
  );
}
