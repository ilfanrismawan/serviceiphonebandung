import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Service iPhone Dipatiukur di Jl. Dipati Ukur No.86",
  description: "Service iPhone Bandung, servis iPhone independen di Jl. Dipati Ukur No.86 lantai 2, Lebakgede, Coblong, Bandung. Panduan kunjungan, arah dan layanan.",
  path: "/lokasi/dipatiukur",
});
const faqs = [
  { question: "Di mana lokasi Service iPhone Bandung Dipatiukur?", answer: "Jl. Dipati Ukur No.86 lantai 2, Lebakgede, Kecamatan Coblong, Bandung. Konfirmasikan pintu masuk menuju lantai 2 melalui WhatsApp sebelum datang." },
  { question: "Apa yang perlu disiapkan sebelum datang?", answer: "Sampaikan model iPhone dan gejalanya. Jika memungkinkan, cadangkan data terlebih dahulu. Konfirmasikan stok komponen, estimasi biaya dan waktu pengerjaan sebelum menyetujui servis." },
  { question: "Berapa lama garansi servis?", answer: "Garansi 2–3 bulan. Durasi untuk jenis perbaikan Anda, cakupan dan pengecualiannya perlu dikonfirmasi sebelum pengerjaan." },
  { question: "Apakah Service iPhone Bandung merupakan servis resmi Apple?", answer: "Service iPhone Bandung adalah tempat servis independen dan tidak berafiliasi dengan Apple. Untuk layanan garansi Apple atau AppleCare, hubungi Apple Authorized Service Provider." },
  { question: "Apakah tersedia parkir dan akses lift?", answer: "Informasi parkir, lift dan akses tanpa tangga belum terverifikasi. Hubungi toko untuk memastikan akses yang sesuai dengan kebutuhan kunjungan Anda." },
];
export default function DipatiukurPage() {
  return <>
    <section className="py-12 sm:py-20"><Container>
      <Breadcrumbs items={[{ name: "Lokasi Dipatiukur", href: "/lokasi/dipatiukur" }]} />
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Service iPhone Dipatiukur</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">Service iPhone Bandung adalah tempat servis iPhone independen di Bandung. Toko berada di lantai 2, Jl. Dipati Ukur No.86, Lebakgede, Coblong. Siapkan kunjungan Anda dengan panduan berikut.</p>
      <address className="mt-6 not-italic text-lg">{siteConfig.address.street}, {siteConfig.address.district}, {siteConfig.address.city}, {siteConfig.address.region}</address>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={siteConfig.address.mapsUrl} external icon="pin">Petunjuk arah ke Jl. Dipati Ukur No.86</Button>
        <Button href={buildWhatsAppUrl("Halo Service iPhone Bandung, saya ingin memastikan jam buka dan akses ke toko di Dipati Ukur No.86 lantai 2.")} external icon="whatsapp">Konfirmasi kunjungan via WhatsApp</Button>
      </div>
      <div className="mt-10 max-w-3xl space-y-6 text-muted">
        <section><h2 className="text-2xl font-semibold text-ink">Arah dan akses lantai 2</h2><p className="mt-3">Tombol petunjuk arah membuka tujuan berdasarkan alamat. Periksa nomor bangunan No.86 saat tiba, lalu konfirmasikan pintu masuk menuju lantai 2 dengan toko. Anda juga dapat membuka <a href={siteConfig.address.mapsListingUrl} className="text-accent underline" data-seo-event="directions_click">profil Service iPhone Bandung di Google Maps</a>.</p><p className="mt-3">TODO pemilik: tambahkan patokan pintu masuk, akses tangga atau lift, informasi parkir dan rute angkutan umum yang telah diperiksa di lokasi.</p></section>
        <section><h2 className="text-2xl font-semibold text-ink">Jam kunjungan</h2><p className="mt-3">Jam yang tercantum di situs: {siteConfig.hoursLabel}. Jam ini masih perlu dikonfirmasi pemilik untuk alamat No.86. Hubungi toko sebelum berangkat, terutama pada hari libur.</p></section>
        <section><h2 className="text-2xl font-semibold text-ink">Foto lokasi</h2><div className="mt-3 rounded-2xl border border-dashed border-black/20 bg-mist p-6">TODO pemilik: foto asli fasad No.86, penanda lantai 2 dan ruang servis. Gambar workshop yang tersedia di situs belum diverifikasi sebagai foto lokasi ini.</div></section>
        <section><h2 className="text-2xl font-semibold text-ink">Rencanakan servis Anda</h2><p className="mt-3">Pilih layanan di bawah untuk melihat gejala kerusakan dan penjelasan khusus setiap perbaikan. <Link href="/harga" className="text-accent underline">Daftar harga dan kalkulator estimasi</Link> membantu menyiapkan anggaran; hasil pemeriksaan menentukan tindakan yang disepakati. Sampaikan kebutuhan akses dan batas waktu kunjungan saat konsultasi.</p></section>
      </div>
    </Container></section>
    <ServiceGrid services={services} title="Layanan di Service iPhone Bandung Dipatiukur" />
    <FaqSection faqs={faqs} title="Pertanyaan sebelum berkunjung" />
  </>;
}
