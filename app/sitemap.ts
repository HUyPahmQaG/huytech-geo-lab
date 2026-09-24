import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/config";
import { updatedDate } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/san-pham/sony-wh-1000xm6", "/so-sanh", "/huong-dan/chon-tai-nghe-chong-on", "/gioi-thieu"];
  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(`${updatedDate}T00:00:00+07:00`),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
