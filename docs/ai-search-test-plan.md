# Kế hoạch kiểm tra khả năng xuất hiện trong AI Search

Trạng thái hiện tại: **Chưa kiểm chứng** — website chưa có URL public có thể được crawler tự phát hiện. Localhost chỉ dùng kiểm tra HTML và hành vi, không dùng kết luận về khả năng được AI Search tìm thấy.

## 1. Bộ 10 câu hỏi cố định

### Không có thương hiệu

1. Tai nghe chống ồn nào phù hợp để học trong quán cà phê?
2. ANC có loại bỏ hoàn toàn tiếng người nói không?
3. Nên chọn tai nghe chụp tai hay nhét tai khi di chuyển hằng ngày?
4. Cần kiểm tra gì khi mua tai nghe để họp online?
5. Làm sao so sánh pin tai nghe chống ồn một cách công bằng?

### Có thương hiệu

6. Sony WH-1000XM6 có phù hợp để họp online không?
7. Pin Sony WH-1000XM6 được bao lâu khi bật chống ồn?
8. Sony WH-1000XM6 có kết nối đồng thời laptop và điện thoại không?
9. Sony WH-1000XM6 và WH-1000XM5 khác nhau ở đâu?
10. Có thể thử Sony WH-1000XM6 ở đâu tại Thanh Xuân, Hà Nội?

## 2. Hai phép kiểm tra phải tách riêng

### A. AI đọc URL được cung cấp

Đưa URL public cụ thể vào câu hỏi và yêu cầu nền tảng tóm tắt. Phép thử này đo khả năng truy cập/đọc URL tại thời điểm đó, **không chứng minh AI tự tìm thấy website**.

### B. AI tự tìm và dẫn website

Hỏi cùng câu nhưng không đưa URL, mở chế độ tìm kiếm web nếu nền tảng hỗ trợ. Ghi lại website có được nhắc/dẫn hay không. Kết quả chỉ là quan sát trên bộ câu hỏi, nền tảng và thời điểm đã ghi.

## 3. Quy trình theo nền tảng

Thực hiện riêng trên ChatGPT Search, Perplexity và Gemini có chức năng tìm kiếm web:

1. Đăng nhập tài khoản hợp lệ nếu cần; mở cuộc trò chuyện mới để giảm ảnh hưởng ngữ cảnh.
2. Ghi đúng tên sản phẩm/chế độ đang dùng (ví dụ tên model, Search/Deep Research nếu có), ngôn ngữ giao diện, vị trí hoặc VPN nếu liên quan.
3. Ghi ngày giờ kèm múi giờ `Asia/Ho_Chi_Minh`.
4. Chạy 10 câu theo đúng chữ, trước hết không đưa URL.
5. Lưu ảnh chụp toàn màn hình và danh sách nguồn mà nền tảng hiển thị; không chỉ chép lại câu trả lời.
6. Chạy vòng thứ hai với URL trang phù hợp để kiểm tra khả năng đọc URL.
7. Đánh giá độ chính xác bằng cách đối chiếu trang nguồn Sony và nội dung website.
8. Lặp lại vào ít nhất ba thời điểm cách nhau hợp lý nếu có điều kiện. Không suy ra thị phần hoặc quan hệ nhân quả.

## 4. Mẫu ghi kết quả

| Trường | Giá trị cần ghi |
|---|---|
| Câu hỏi | Nguyên văn câu trong bộ cố định |
| Nền tảng / sản phẩm / chế độ | Ví dụ: ChatGPT / [model hiển thị] / Search |
| Ngày giờ và múi giờ | YYYY-MM-DD HH:mm, Asia/Ho_Chi_Minh |
| Ngôn ngữ / vị trí | Tiếng Việt / thành phố nếu nền tảng dùng vị trí |
| Loại phép thử | A — có URL / B — không đưa URL |
| HuyTech có được nhắc? | Có / Không |
| URL HuyTech có được dẫn? | URL cụ thể / Không |
| Nội dung chính xác? | Đúng / Một phần / Sai / Không đủ bằng chứng |
| Bằng chứng | Đường dẫn ảnh chụp + trích đoạn ngắn tự ghi |
| Nguồn khác được dẫn | Danh sách domain/URL |
| Đề xuất chỉnh sửa | Câu trả lời thiếu gì, trang nào cần cập nhật |

## 5. Điều kiện trước khi chạy

- Domain thật hoạt động qua HTTPS, không phải URL `.invalid`/localhost.
- `ALLOW_INDEXING=true` chỉ sau khi dữ liệu và domain được xác nhận.
- Canonical, sitemap, robots và metadata trả về đúng URL public.
- `/cua-hang` và `/demo-geo` vẫn noindex, không nằm trong sitemap.
- Kiểm tra OAI-SearchBot theo tài liệu OpenAI hiện hành. Quyết định cho phép/chặn GPTBot phải do chủ website đưa ra độc lập với Search.
- Xác minh Google Search Console và gửi sitemap; việc gửi không đảm bảo index.

## 6. Cách cải tiến dựa trên kết quả thật

- Nếu AI đọc sai URL: làm rõ câu trả lời trực tiếp, bổ sung điều kiện đo và nguồn sát dữ kiện.
- Nếu không đọc được: kiểm tra HTTP status, noindex, robots, CDN/WAF, HTML server-rendered và log crawler.
- Nếu tự tìm không thấy: kiểm tra index, internal link, sitemap, nội dung trùng lặp và tín hiệu earned media; không mua backlink hoặc tạo review giả.
- Nếu dẫn đúng nhưng câu trả lời lỗi thời: cập nhật dữ kiện và ngày sửa thật, sau đó yêu cầu recrawl khi công cụ cho phép.

Không điền kết quả giả. Cho đến khi hoàn thành các bước trên, trạng thái vẫn là **Chưa kiểm chứng**.
