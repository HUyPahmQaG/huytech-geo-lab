import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/config";
import { updatedDate } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: "/", modified: "2026-09-26" },
    { route: "/san-pham/sony-wh-1000xm6", modified: updatedDate },
    { route: "/so-sanh", modified: updatedDate },
    { route: "/huong-dan/chon-tai-nghe-chong-on", modified: "2026-09-25" },
    { route: "/gioi-thieu", modified: updatedDate },
  ];
  return routes.map(({ route, modified }) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(`${modified}T00:00:00+07:00`),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
