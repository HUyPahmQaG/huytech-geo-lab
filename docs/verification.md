# Báo cáo kiểm thử và nghiệm thu cục bộ

Ngày kiểm tra: **23/09/2026**. Môi trường: Windows, Node.js `v24.14.1`, npm `11.11.0`, Next.js `16.3.5`, Chrome cài cục bộ. Bản đo là production build chạy tại `http://localhost:3000` với cấu hình preview `noindex`.

## Kết quả tổng hợp

| Hạng mục | Kết quả | Trạng thái |
|---|---|---|
| ESLint | Không có lỗi/cảnh báo | Đạt |
| TypeScript | `tsc --noEmit` thành công | Đạt |
| Test tự động | 6/6 pass | Đạt |
| Production build | 11/11 trang tĩnh/SSG sinh thành công | Đạt |
| Route chính | 7 trang nội dung + robots + sitemap trả 200 | Đạt |
| 404 | URL không tồn tại trả HTTP 404 | Đạt |
| Liên kết nội bộ/tài nguyên được crawl | 10 URL kiểm tra, 0 lỗi | Đạt |
| HTML chưa chạy JavaScript | Có H1, câu trả lời chính, metadata và JSON-LD Product | Đạt |
| Schema an toàn | Không Offer/Review/AggregateRating giả; không LocalBusiness hoạt động | Đạt |
| Noindex/sitemap | Preview noindex; cửa hàng/demo noindex và không vào sitemap | Đạt |
| Responsive | Không tràn ngang tại 390, 768, 1440 px | Đạt |
| Menu mobile | `<details>` mở bằng click, nội dung hiển thị dạng grid | Đạt |
| FAQ bàn phím | Focus tới `SUMMARY`, phím Space mở nội dung | Đạt |
| Console | Không ghi nhận lỗi trong vòng kiểm tra Chrome | Đạt |
| Lighthouse mobile | Performance 78, Accessibility 100, SEO 69 | Chưa đạt mục tiêu Performance/SEO |
| Lighthouse desktop | Performance 100, Accessibility 100, SEO 69 | Performance/Accessibility đạt; SEO chủ ý thấp do noindex |
| AI Search tự phát hiện | Chưa có website public | Chưa kiểm chứng |

## Lệnh đã chạy

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npm run start
node scripts/browser-check.mjs
```

Các phép HTTP dùng `curl.exe` trên production server để kiểm tra status, HTML, canonical, robots, sitemap và internal links.

Lighthouse mobile:

```powershell
npx --no-install lighthouse http://localhost:3000 `
  --only-categories=performance,accessibility,seo `
  --output=json `
  --output-path=docs/lighthouse-home.json `
  --chrome-path="C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --chrome-flags="--headless=new --no-sandbox --disable-gpu" `
  --quiet
```

Lighthouse desktop thêm `--preset=desktop` và ghi vào `docs/lighthouse-home-desktop.json`.

## Chi tiết production build

Next.js ghi nhận:

- Static: `/`, `/_not-found`, `/cua-hang`, `/demo-geo`, `/gioi-thieu`, `/huong-dan/chon-tai-nghe-chong-on`, `/robots.txt`, `/sitemap.xml`, `/so-sanh`.
- SSG: `/san-pham/sony-wh-1000xm6` qua `generateStaticParams`.
- TypeScript hoàn tất và 11/11 trang được sinh.

HTTP status:

| Route | Status |
|---|---:|
| `/` | 200 |
| `/san-pham/sony-wh-1000xm6` | 200 |
| `/so-sanh` | 200 |
| `/huong-dan/chon-tai-nghe-chong-on` | 200 |
| `/cua-hang` | 200 |
| `/gioi-thieu` | 200 |
| `/demo-geo` | 200 |
| `/robots.txt` | 200 |
| `/sitemap.xml` | 200 |
| `/duong-dan-khong-ton-tai` | 404 |

## Kiểm tra HTML và SEO

- HTML trang sản phẩm chứa H1, “Câu trả lời trực tiếp” và `application/ld+json` trước khi JavaScript phía trình duyệt chạy.
- Product schema tồn tại và không có `Offer` giả.
- Canonical trang sản phẩm là `https://huytech-geo.invalid/san-pham/sony-wh-1000xm6` trong preview.
- Toàn site preview có `noindex,follow`. URL `.invalid` chỉ dùng khi noindex; build sẽ dừng nếu bật index với placeholder/localhost.
- `robots.txt` cho phép crawl, có rule riêng cho OAI-SearchBot và GPTBot; không dùng Disallow để thay noindex.
- Sitemap có 5 URL nội dung và không chứa `/cua-hang` hoặc `/demo-geo`.
- Base URL sitemap là `.invalid` vì chưa có domain thật; sitemap không được quảng bá trong robots khi `ALLOW_INDEXING=false`.

## Kiểm tra trình duyệt

`scripts/browser-check.mjs` dùng Chrome DevTools Protocol với viewport CSS thực:

| Viewport | innerWidth | scrollWidth | Tràn ngang | Menu mobile |
|---|---:|---:|---|---|
| Mobile | 390 | 390 | Không | Hiện |
| Tablet | 768 | 768 | Không | Hiện |
| Desktop | 1440 | 1440 | Không | Ẩn, dùng nav desktop |

Ảnh minh chứng:

- `docs/screenshot-mobile.png`
- `docs/screenshot-tablet.png`
- `docs/screenshot-desktop.png`

## Lighthouse

### Mobile mặc định

- Performance: **78**
- Accessibility: **100**
- SEO: **69**
- FCP: 1,4 s; LCP: 2,8 s; TBT: 710 ms; CLS: 0.

Performance chưa đạt mục tiêu 90 trong lần đo này. TBT là yếu tố chính và có thể dao động theo CPU/môi trường Windows; cần profile lại trên hạ tầng deploy thật, không tự nâng điểm hoặc chọn kết quả giả. Báo cáo đầy đủ: `docs/lighthouse-home.json`.

### Desktop

- Performance: **100**
- Accessibility: **100**
- SEO: **69**
- FCP: 0,3 s; LCP: 0,5 s; TBT: 10 ms; CLS: 0.

SEO 69 ở cả hai phép đo là kết quả dự kiến vì bản local/preview bắt buộc có `noindex`. Không nên bật index chỉ để tăng điểm. Sau khi có domain thật và đủ dữ liệu, build với `ALLOW_INDEXING=true` rồi đo lại. Báo cáo đầy đủ: `docs/lighthouse-home-desktop.json`.

Lighthouse đã ghi báo cáo hợp lệ nhưng CLI trả exit code 1 khi dọn thư mục profile Chrome với lỗi `EPERM` trên Windows. Điểm, thời gian fetch và audit vẫn có đủ trong JSON; lỗi này được ghi lại, không coi exit code là thành công tuyệt đối.

## Chưa kiểm chứng / cần thủ công sau deploy

- Rich Results Test và Schema Markup Validator bằng URL public.
- Google Search Console, trạng thái index và URL Inspection.
- Khả năng ChatGPT Search, Perplexity và Gemini tự tìm/dẫn website.
- Giá, tồn kho, bảo hành Việt Nam và trải nghiệm sản phẩm.
- LocalBusiness/Google Business Profile vì chưa có doanh nghiệp và NAP thật.
- Kiểm tra trên thiết bị thật và trình đọc màn hình; Chrome automation không thay thế toàn bộ kiểm thử hỗ trợ tiếp cận.
