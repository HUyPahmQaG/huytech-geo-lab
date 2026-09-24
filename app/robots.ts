import type { MetadataRoute } from "next";
import { allowIndexing, baseUrl } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Lựa chọn huấn luyện giữ ở cấu hình trung lập; chủ website cần tự quyết định trước khi public.
      { userAgent: "GPTBot", allow: "/" },
    ],
    sitemap: allowIndexing ? new URL("/sitemap.xml", baseUrl).toString() : undefined,
  };
}
