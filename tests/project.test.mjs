import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("không có liên kết giả href #", () => {
  const files = ["app/page.tsx", "app/cua-hang/page.tsx", "app/demo-geo/page.tsx", "components/header.tsx"];
  for (const file of files) assert.doesNotMatch(read(file), /href=["']#["']/);
});

test("Product schema không phát dữ liệu thương mại hoặc review giả", () => {
  const page = read("app/san-pham/[slug]/page.tsx");
  assert.match(page, /"@type": "Product"/);
  assert.doesNotMatch(page, /"@(type|id)": "(Offer|Review|AggregateRating)"/);
  assert.doesNotMatch(page, /aggregateRating|priceCurrency|availability/);
});

test("không phát LocalBusiness khi cấu hình chưa xác minh", () => {
  const store = read("app/cua-hang/page.tsx");
  const data = read("data/site.ts");
  assert.match(data, /verified: false/);
  assert.doesNotMatch(store, /<JsonLd[^>]+codeExample/);
  assert.match(store, /không phải JSON-LD đang hoạt động/);
});

test("trang demo và cửa hàng không nằm trong sitemap", () => {
  const sitemap = read("app/sitemap.ts");
  assert.doesNotMatch(sitemap, /["']\/demo-geo["']/);
  assert.doesNotMatch(sitemap, /["']\/cua-hang["']/);
});

test("trang local và demo luôn noindex", () => {
  assert.match(read("app/cua-hang/page.tsx"), /noindex: true/);
  assert.match(read("app/demo-geo/page.tsx"), /noindex: true/);
});

test("keyword research có ít nhất 20 từ khóa và 12 câu hỏi", () => {
  const doc = read("docs/keyword-research.md");
  const [keywords, questions] = doc.split("## 12 câu hỏi ngôn ngữ tự nhiên");
  assert.ok((keywords.match(/^\| [^|-].+\|$/gm) ?? []).length >= 20);
  assert.ok((questions.match(/^\| [^|-].+\|$/gm) ?? []).length >= 12);
});

test("trang chính trả lời truy vấn tai nghe chống ồn cho sinh viên theo ngân sách", () => {
  const home = read("app/page.tsx");
  const guide = read("app/huong-dan/chon-tai-nghe-chong-on/page.tsx");
  assert.match(home, /Tai nghe chống ồn cho sinh viên/);
  assert.match(guide, /Tai nghe chống ồn cho sinh viên giá rẻ/);
  assert.match(guide, /HuyTech không bán hàng/);
});

test("tên website và favicon H được khai báo cho kết quả tìm kiếm", () => {
  const layout = read("app/layout.tsx");
  const icon = read("app/icon.tsx");
  assert.match(layout, /name: site\.shortName/);
  assert.match(layout, /alternateName:/);
  assert.match(icon, /contentType = "image\/png"/);
  assert.match(icon, />H<\/span>/);
});
