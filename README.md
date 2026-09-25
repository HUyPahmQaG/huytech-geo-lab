# HuyTech GEO Lab

Website Next.js + TypeScript + Tailwind CSS cho bài tập GEO/Technical SEO, tư vấn tai nghe chống ồn với Sony WH-1000XM6 làm sản phẩm trọng tâm.

Website production: <https://huytech-geo-lab.vercel.app/>

## Yêu cầu môi trường

- Node.js `>=20.9.0` (đã phát triển với Node 24).
- npm 10 trở lên.
- VS Code và Windows PowerShell.

## Cài đặt và chạy trên Windows PowerShell

```powershell
cd "D:\BI\Webside_GEO"
npm install
npm run dev
```

Mở `http://localhost:3000`. Bản local mặc định có `noindex,follow` và dùng base URL `.invalid` để không bị nhầm là website public.

Production build cục bộ:

```powershell
npm run check
npm run start
```

`npm run check` lần lượt chạy ESLint, TypeScript, test Node và `next build`.

Lighthouse được giữ trong `devDependencies` để có thể đo lại. Hãy chạy `npm run start` ở một terminal trước, rồi chạy Lighthouse ở terminal khác; cấu hình và kết quả gần nhất nằm trong `docs/verification.md`.

## Cấu trúc cần biết

- `app/`: route, metadata, sitemap, robots và các trang.
- `components/`: menu, FAQ, breadcrumb, JSON-LD và thành phần dùng lại.
- `data/site.ts`: sản phẩm, thông số, nguồn, FAQ, cấu hình Local SEO.
- `lib/config.ts`: base URL và chốt an toàn index.
- `docs/`: nghiên cứu từ khóa, nguồn, báo cáo, test plan và video script.
- `tests/`: kiểm tra dữ liệu/schema/SEO quan trọng.
- `scripts/browser-check.mjs`: kiểm tra viewport, overflow, menu, FAQ bàn phím và lỗi console bằng Chrome DevTools Protocol.

## Cách đổi sản phẩm, thương hiệu và nguồn

1. Sửa `product`, `comparisonRows` và `sources` trong `data/site.ts`.
2. Đổi route slug trong `app/san-pham/[slug]/page.tsx`, các liên kết nội bộ và sitemap.
3. Cập nhật nội dung trang chủ, so sánh, hướng dẫn và tài liệu trong `docs/`.
4. Mở từng URL nguồn, sửa `checkedDate` bằng ngày kiểm tra thật.
5. Chạy `npm run check`; kiểm tra Product JSON-LD không còn dữ liệu cũ.

Không thêm giá, Offer, Review, AggregateRating hoặc bảo hành nếu chưa có căn cứ phù hợp.

## Cách đổi domain và chuẩn bị deploy

Sao chép `.env.example` thành `.env.local` cho máy cá nhân. Khi chỉ preview:

```env
NEXT_PUBLIC_SITE_URL=https://preview-domain-cua-ban.vn
ALLOW_INDEXING=false
```

Chỉ khi domain public, nội dung và pháp lý đã được xác nhận:

```env
NEXT_PUBLIC_SITE_URL=https://domain-that-cua-ban.vn
ALLOW_INDEXING=true
```

Build sẽ dừng nếu bật index với localhost, `.invalid`, `.example` hoặc placeholder. Trước khi public:

1. Quyết định chính sách GPTBot độc lập với OAI-SearchBot trong `app/robots.ts`.
2. Xác nhận canonical, sitemap và robots dùng domain thật.
3. Giữ `/cua-hang` và `/demo-geo` noindex; chỉ chuyển cửa hàng thành trang thật sau khi NAP đã xác minh.
4. Chạy Rich Results Test, Lighthouse production, kiểm tra 390/768/1440 px và bàn phím.
5. Kết nối Search Console, gửi sitemap và theo dõi index; không coi gửi sitemap là bảo đảm index.
6. Thực hiện `docs/ai-search-test-plan.md` sau khi crawler có thể truy cập public.

## Dữ liệu cần bổ sung

- Tên tác giả/nhóm sinh viên thật.
- Domain public.
- Giá và bảo hành Việt Nam từ nguồn phù hợp nếu muốn hiển thị.
- NAP, giờ mở cửa, tọa độ, ảnh và bản đồ của doanh nghiệp thật nếu triển khai Local SEO.
- Kết quả kiểm tra thực tế từ Search Console, Rich Results Test và AI Search.

## Nguyên tắc nội dung

HuyTech là thương hiệu giả định. Website không bán hàng, không nhận là đại lý Sony, không hứa xếp hạng và không giả trải nghiệm. Ngày cập nhật chỉ thay khi có kiểm tra/chỉnh sửa thật.
