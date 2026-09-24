import type { Metadata } from "next";
import { allowIndexing, baseUrl } from "@/lib/config";
import { site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const index = allowIndexing && !noindex;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url: new URL(path, baseUrl),
    },
  };
}

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.path, baseUrl).toString(),
  })),
});
