import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { sources } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Giới thiệu dự án và phương pháp biên soạn",
  description: "Giới thiệu HuyTech GEO Lab, cách kiểm tra nguồn, chính sách đính chính và danh sách tài liệu tham khảo.",
  path: "/gioi-thieu",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Giới thiệu", path: "/gioi-thieu" }])} />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Giới thiệu" }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Bài tập môn Hệ thống kinh doanh thông minh</p>
          <h1>Về HuyTech GEO Lab</h1>
          <p className="lede">Một website học tập minh họa cách tổ chức nội dung hữu ích cho người đọc, công cụ tìm kiếm và hệ thống trả lời AI — không phải cửa hàng hay tổ chức chuyên môn đã đăng ký.</p>
        </div>
      </header>
      <div className="narrow content-section prose">
        <section>
          <h2>Mục tiêu</h2>
          <p>Dự án trả lời các câu hỏi thực tế khi chọn tai nghe chống ồn, dùng Sony WH-1000XM6 làm sản phẩm trọng tâm. GEO ở đây là cách giúp nội dung dễ tìm, dễ hiểu và dễ trích dẫn hơn; nó bổ sung chứ không thay thế SEO.</p>
          <p>Google hiện hướng dẫn rằng các nguyên tắc SEO nền tảng vẫn áp dụng cho tính năng AI và không có schema hay “tệp AI” đặc biệt bắt buộc. Việc đáp ứng yêu cầu không đảm bảo được crawl, index hay xuất hiện.</p>
        </section>
        <section>
          <h2>Phương pháp biên soạn</h2>
          <ol>
            <li>Thu thập câu hỏi theo ý định tìm hiểu, cân nhắc và địa phương; không tự gán search volume.</li>
            <li>Ưu tiên trang hỗ trợ và trang sản phẩm của nhà sản xuất cho dữ liệu kỹ thuật.</li>
            <li>Ghi ngày kiểm tra, gắn nguồn sát dữ kiện và đánh dấu phần chưa xác minh.</li>
            <li>Tách “dữ kiện từ nguồn” khỏi “kết luận biên soạn”; không nhận đã thử trực tiếp.</li>
            <li>Sinh giao diện và JSON-LD từ cùng dữ liệu có cấu trúc, rồi kiểm thử sự khớp nhau.</li>
          </ol>
        </section>
        <section>
          <h2>Tác giả và trách nhiệm</h2>
          <p>Tác giả được ghi ở mức <strong>Nhóm dự án HuyTech GEO Lab</strong> vì chưa có tên cá nhân/nhóm thật được cung cấp. Nhãn này không ngụ ý chứng chỉ, chuyên môn âm thanh hay quan hệ thương mại với Sony.</p>
        </section>
        <section>
          <h2>Chính sách đính chính</h2>
          <p>Khi phát hiện sai, nhóm cần đối chiếu lại nguồn gốc, sửa dữ liệu giao diện và dữ liệu có cấu trúc, cập nhật ngày chỉnh sửa thật rồi ghi thay đổi trong tài liệu dự án. Không tự đổi ngày chỉ vì người dùng tải trang.</p>
          <p>Trong bản công khai tương lai, cần bổ sung kênh liên hệ thật trước khi tiếp nhận yêu cầu đính chính. Hiện tại dự án chưa có email hoặc số điện thoại công khai.</p>
        </section>
        <section id="nguon">
          <h2>Danh sách nguồn</h2>
          <p>Liên kết đi thẳng tới tài liệu cụ thể. Xem bảng dữ kiện được hỗ trợ và phần còn thiếu tại <Link href="/san-pham/sony-wh-1000xm6">hồ sơ sản phẩm</Link> và <Link href="/so-sanh">trang so sánh</Link>.</p>
          <SourceList items={sources} />
        </section>
      </div>
    </>
  );
}
