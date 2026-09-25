import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { allowIndexing, baseUrl } from "@/lib/config";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: { default: `${site.shortName} | Tư vấn tai nghe chống ồn`, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.author }],
  creator: site.author,
  robots: { index: allowIndexing, follow: true },
  openGraph: { locale: site.locale, siteName: site.shortName, type: "website" },
};

const organizationId = new URL("/#organization", baseUrl).toString();
const websiteId = new URL("/#website", baseUrl).toString();

const globalSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "Nhóm dự án HuyTech GEO Lab",
    url: baseUrl.toString(),
    description: "Nhóm thực hiện dự án học tập HuyTech GEO Lab; không phải doanh nghiệp bán lẻ đã xác minh.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: baseUrl.toString(),
    name: site.shortName,
    alternateName: [site.name, "huytech-geo-lab.vercel.app"],
    inLanguage: "vi-VN",
    publisher: { "@id": organizationId },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <JsonLd data={globalSchema} />
        <div className="demo-banner" role="note">
          Bản demo phục vụ bài tập — HuyTech không phải cửa hàng hay đại lý chính hãng.
        </div>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
