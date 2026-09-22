import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container size="narrow" className="text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
          Halaman yang kamu cari mungkin sudah dipindahkan atau tidak tersedia.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Kembali ke beranda</Button>
          <Button href="/layanan" variant="secondary">
            Lihat layanan
          </Button>
        </div>
      </Container>
    </section>
  );
}
