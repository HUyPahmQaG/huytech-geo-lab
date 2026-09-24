# Báo cáo GEO và Local SEO

Ngày lập: 22/09/2026.

## Đối chiếu 5 yêu cầu bài tập

| Yêu cầu | Minh chứng | Trạng thái | Giới hạn |
|---|---|---|---|
| Nghiên cứu từ khóa và câu hỏi AI | `docs/keyword-research.md` có 20 từ khóa + 12 câu hỏi | Đã kiểm tra cấu trúc | Chưa có dữ liệu search volume/Search Console |
| Nội dung chính xác, có nguồn, heading, bullet, bảng | Trang sản phẩm, so sánh, hướng dẫn; `docs/sources.md` | Đã kiểm tra cục bộ | Chưa có thử nghiệm sản phẩm độc lập |
| Schema mô tả thực thể và quan hệ | WebSite, Organization, Product, Article, BreadcrumbList, FAQPage | Đã kiểm tra bằng test mã nguồn/HTML | Rich Results Test online cần domain public |
| Nhanh, responsive, dễ dùng | SSG/SSR, CSS mobile-first, SVG nhẹ, menu/FAQ bàn phím | Đã kiểm tra | Mobile Lighthouse Performance 78, dưới mục tiêu 90; xem `verification.md` |
| Kiểm tra xuất hiện AI Search | `docs/ai-search-test-plan.md`, `/demo-geo` | Đã triển khai | Chưa kiểm chứng vì website chưa public |

## Schema đã dùng

- `WebSite` liên kết `publisher` tới `Organization` bằng `@id` ổn định.
- `Organization` mô tả đúng “nhóm dự án học tập”, không nhận là doanh nghiệp đã đăng ký.
- `Product` trên trang Sony WH-1000XM6, sinh từ cùng `data/site.ts` với bảng giao diện. Không có `Offer`, `Review`, `AggregateRating`, tồn kho hoặc giá.
- `Article` trên bài hướng dẫn, liên kết tác giả/nhà xuất bản là nhóm dự án.
- `BreadcrumbList` theo đường dẫn thật.
- `FAQPage` chỉ ở trang có FAQ hiển thị đầy đủ trong HTML. Markup không tạo lời hứa rich result.
- Không phát `LocalBusiness`/`ElectronicsStore`; ví dụ trên `/cua-hang` chỉ là code được escape.

JSON hợp lệ về cú pháp, hợp lệ theo Schema.org, đủ điều kiện một loại rich result và thực sự xuất hiện là bốn khái niệm khác nhau. Trang Product cố ý không bịa `offers` hoặc `review` để xóa cảnh báo công cụ.

## Technical SEO

- Metadata, description, canonical và Open Graph riêng theo trang.
- `html lang="vi"`; nội dung quan trọng server-rendered.
- Base URL tập trung tại `lib/config.ts`. Mặc định dùng `.invalid` và noindex.
- Nếu `ALLOW_INDEXING=true` mà URL là localhost/placeholder, build dừng với lỗi.
- Local/preview mặc định `noindex,follow`. Robots vẫn cho crawl để crawler có thể đọc noindex.
- `/cua-hang` và `/demo-geo` luôn noindex, không có trong sitemap.
- 404 thật qua `not-found.tsx`; liên kết nội bộ dùng URL thật, không có nút `href="#"`.
- Không tạo `llms.txt`: tài liệu Google nêu không cần tệp AI đặc biệt để xuất hiện trong AI features; dự án chưa có mục đích riêng cho tệp này.
- Robots hiện để OAI-SearchBot và GPTBot `Allow`. Hai tác nhân có mục đích độc lập; trước khi public, chủ website phải tự quyết định chính sách GPTBot thay vì coi đó là điều kiện Search.

## Chiến lược Local SEO trung thực

### Trạng thái demo

Tên HuyTech, khu vực Thanh Xuân và trang cửa hàng chỉ phục vụ minh họa. Địa chỉ, điện thoại, giờ mở cửa, tọa độ và URL bản đồ đều `null` trong `data/site.ts`. Vì vậy:

- Không có nút gọi, chỉ đường hay đặt hàng.
- Không phát LocalBusiness schema.
- Không tạo Google Business Profile.
- Trang luôn noindex và bị loại khỏi sitemap.

### Khi có doanh nghiệp thật

1. Xác minh quyền đại diện và điều kiện của Google Business Profile.
2. Nhập NAP thật, giờ đặc biệt, tọa độ, bản đồ và ảnh thật; giữ nhất quán trên website và hồ sơ.
3. Sinh giao diện và LocalBusiness từ cùng cấu hình.
4. Khuyến khích đánh giá thật sau giao dịch; không tặng lợi ích đổi lấy đánh giá có định hướng.
5. Đo truy vấn theo khu vực. Local result phụ thuộc relevance, distance, prominence nên không hứa hạng cho mọi người.

## Earned media trung thực

- Xuất bản checklist thử ANC/micro có thể tái sử dụng, ghi rõ phương pháp và giới hạn.
- Mời câu lạc bộ công nghệ/trang sinh viên đánh giá độc lập; không duyệt trước kết luận và công khai quan hệ nếu có cho mượn sản phẩm.
- Cung cấp bảng dữ kiện có nguồn cho tác giả bên thứ ba; đề nghị sửa lỗi nhưng không yêu cầu backlink để đổi lợi ích.
- Tìm đề cập tự nhiên từ hoạt động học thuật, workshop hoặc nội dung hữu ích.
- Không mua backlink, tự tạo bài seeding, đánh giá giả hoặc dựng trích dẫn chuyên gia.

## Giới hạn và việc chưa làm được

- Chưa public, chưa có Search Console, log crawler hoặc dữ liệu index.
- Chưa kiểm tra AI tự tìm thấy website.
- Chưa có dữ liệu sản phẩm thử trực tiếp, giá Việt Nam, bảo hành và tồn kho.
- Chưa có doanh nghiệp/địa điểm thật để Local SEO.
- Chưa có tên tác giả thật.
- Lighthouse và ảnh chụp viewport đã chạy cục bộ; Rich Results Test public chưa chạy. Xem `docs/verification.md`.
