import { getPublicInvoice } from "@/lib/nota/invoices";
import { receiptPdf } from "@/lib/nota/pdf";
import { invoiceLabel } from "@/lib/nota/model";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> },
) {
  const headers = {
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow",
    "Referrer-Policy": "no-referrer",
  };
  try {
    const { token } = await params;
    const invoice = await getPublicInvoice(token);
    if (!invoice)
      return new Response("Nota tidak ditemukan", { status: 404, headers });
    const settings = invoice.brandSnapshot;
    const url = new URL(request.url);
    const paper = ["a4", "80", "58"].includes(
      url.searchParams.get("paper") || "",
    )
      ? url.searchParams.get("paper")!
      : settings.paper;
    const origin =
      process.env.NOTA_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      (/^(localhost|127\.0\.0\.1):\d+$/.test(url.host)
        ? url.origin
        : siteConfig.url);
    const bytes = await receiptPdf(
      invoice,
      settings,
      `${origin}/nota/${token}`,
      paper,
    );
    return new Response(new Uint8Array(bytes), {
      headers: {
        ...headers,
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${invoiceLabel(invoice)}-${paper}.pdf"`,
      },
    });
  } catch {
    return new Response("Nota belum dapat dimuat. Silakan coba kembali.", {
      status: 503,
      headers,
    });
  }
}
