# Nguồn và nhật ký xác minh

Ngày kiểm tra thực tế: **22/09/2026**. Các URL dưới đây đã được mở hoặc đối chiếu qua kết quả từ chính miền nguồn. Nội dung website chỉ sử dụng phần cần thiết và diễn giải bằng tiếng Việt.

## Nguồn sản phẩm

| Nguồn | URL | Dữ kiện được hỗ trợ | Loại |
|---|---|---|---|
| Sony WH-1000XM6 Help Guide — Specifications | https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001863304.html | 254 g, sạc khoảng 3,5 giờ, Bluetooth 5.3, SBC/AAC/LDAC/LC3, cổng cáp | Nhà sản xuất |
| Sony WH-1000XM6 — Available operating time | https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001856818.html | Pin tối đa theo codec, ANC/Ambient; sạc nhanh và điều kiện | Nhà sản xuất |
| Sony WH-1000XM6 — Multipoint | https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001863603.html | Kết nối đồng thời hai thiết bị | Nhà sản xuất |
| Sony WH-1000XM6 — What is noise canceling? | https://helpguide.sony.net/mdr/2984/v1/en/contents/TP1001856910.html | ANC chủ yếu giảm tiếng tần số thấp, không triệt hoàn toàn | Nhà sản xuất |
| Sony Electronics — WH-1000XM6 | https://electronics.sony.com/audio/headphones/headband/p/wh1000xm6-b | 12 microphone, QN3; chỉ dùng như mô tả từ hãng | Nhà sản xuất |
| Sony WH-1000XM5 — Specifications | https://www.sony.com/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm5/specifications | 250 g, pin, Bluetooth 5.2, codec, sạc và cổng âm thanh | Nhà sản xuất |
| Sony WH-1000XM5 — Available operating time | https://helpguide.sony.net/mdr/wh1000xm5/v1/en/contents/TP1000534508.html | Pin theo codec/ANC để so sánh cùng điều kiện | Nhà sản xuất |

## Nguồn SEO, AI Search và Local SEO

| Nguồn | URL | Dữ kiện được hỗ trợ | Ghi chú |
|---|---|---|---|
| Google: AI features and your website | https://developers.google.com/search/docs/appearance/ai-features | Không có yêu cầu SEO/schema đặc biệt cho AI features; trang cần index/đủ điều kiện snippet; không đảm bảo xuất hiện | Cập nhật trang ghi nhận 10/12/2025 |
| Google: Introduction to structured data | https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data | Markup phải mô tả nội dung trang; khuyến nghị JSON-LD; cần kiểm thử | Không đồng nhất valid Schema.org với rich result |
| Google: Product structured data | https://developers.google.com/search/docs/appearance/structured-data/product | Phân biệt product snippet và merchant listing | Dự án không phát Offer/Review giả |
| Google: Robots meta tag | https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag | Bot phải crawl được URL để đọc noindex; không dùng Disallow thay noindex | Kiểm tra 22/09/2026 |
| Google: Tips to improve local ranking | https://support.google.com/business/answer/7091?hl=en | Relevance, distance, prominence; cần thông tin đầy đủ và xác minh | Không đảm bảo hạng địa phương |
| OpenAI: Overview of crawlers | https://developers.openai.com/api/docs/bots | OAI-SearchBot phục vụ Search; GPTBot liên quan huấn luyện; cài đặt độc lập | Quyết định GPTBot thuộc chủ website |
| Schema.org | https://schema.org/ | Từ vựng thực thể và quan hệ | Không tự tạo điều kiện rich result |

## Dữ kiện còn thiếu hoặc chưa xác minh

- Giá bán hiện tại tại Việt Nam, tồn kho và ưu đãi.
- Điều kiện bảo hành theo từng nhà bán/thị trường Việt Nam.
- Độ thoải mái, chất âm, ANC và chất lượng micro qua thử nghiệm độc lập hoặc trực tiếp.
- Bằng chứng đo mức quan tâm để gọi sản phẩm “đang hot”. Website **không dùng nhãn này**.
- Tên thật của tác giả/nhóm sinh viên.
- Domain public và trạng thái index.
- NAP, giờ mở cửa, tọa độ, ảnh và URL bản đồ của một cửa hàng thật.
- Kết quả Rich Results Test, Search Console và kiểm tra AI Search sau khi public.

## Quy tắc cập nhật nguồn

Khi thay sản phẩm hoặc dữ liệu: cập nhật `data/site.ts`, mở lại từng URL, thay ngày kiểm tra bằng ngày thực, chạy test và xác nhận JSON-LD khớp giao diện. Không chỉ sửa câu chữ trên trang mà bỏ quên schema.
