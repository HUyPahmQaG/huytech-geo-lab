const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const allowIndexing = process.env.ALLOW_INDEXING === "true";

function isPlaceholder(url: string) {
  return /localhost|127\.0\.0\.1|\.invalid|\.example|ten-mien-that/i.test(url);
}

if (allowIndexing && (!rawUrl || isPlaceholder(rawUrl))) {
  throw new Error(
    "ALLOW_INDEXING=true yêu cầu NEXT_PUBLIC_SITE_URL là domain thật, không phải localhost hoặc URL mẫu.",
  );
}

export const baseUrl = new URL(rawUrl || "https://huytech-geo.invalid");
export const absoluteUrl = (path: string) => new URL(path, baseUrl).toString();
