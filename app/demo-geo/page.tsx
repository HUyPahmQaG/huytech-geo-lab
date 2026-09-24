import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StatusPill } from "@/components/status-pill";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Demo trước và sau khi tối ưu GEO",
  description: "Minh họa cách tổ chức lại nội dung tai nghe chống ồn và bảng đối chiếu năm yêu cầu bài tập.",
  path: "/demo-geo",
  noindex: true,
});

const evidence = [
  { requirement: "1. Từ khóa và câu hỏi AI", evidence: "docs/keyword-research.md", status: "Đã kiểm tra" as const },
  { requirement: "2. Nội dung có nguồn, heading, bullet, bảng", evidence: "/san-pham/sony-wh-1000xm6, /so-sanh", status: "Đã kiểm tra" as const },
  { requirement: "3. Schema đúng thực thể và quan hệ", evidence: "Product, Article, WebSite, Organization, BreadcrumbList, FAQPage", status: "Đã kiểm tra" as const },
  { requirement: "4. Nhanh, responsive, dễ dùng", evidence: "CSS mobile-first; Chrome 390/768/1440 px; Lighthouse trong docs", status: "Đã kiểm tra" as const },
  { requirement: "5. Kiểm tra khả năng xuất hiện AI Search", evidence: "docs/ai-search-test-plan.md", status: "Đã triển khai" as const },
];

export default function GeoDemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Demo GEO" }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Noindex · Dùng khi thuyết trình</p>
          <h1>Cùng một chủ đề, hai cách tổ chức nội dung</h1>
          <p className="lede">Đây là minh họa về khả năng đọc và kiểm tra thông tin, không phải thí nghiệm chứng minh tăng thứ hạng hay lượt trích dẫn.</p>
        </div>
      </header>
      <div className="container content-section prose">
        <section>
          <div className="before-after">
            <article className="before">
              <p className="eyebrow">Trước tối ưu</p>
              <h2>Một đoạn khó quét</h2>
              <p>Tai nghe chống ồn là sản phẩm tiện lợi cho nhiều người vì có thể giúp tập trung và Sony WH-1000XM6 có nhiều tính năng hiện đại như pin lâu kết nối không dây và chống ồn nên có thể dùng để học làm việc đi lại họp hành nhưng tùy người sẽ khác nhau và cần tìm hiểu thêm về giá cũng như các lựa chọn trước khi mua để chọn được sản phẩm phù hợp nhất.</p>
              <p><small>Vấn đề: không trả lời rõ, không điều kiện đo, không nguồn, không phân biệt dữ kiện và nhận định.</small></p>
            </article>
            <article className="after">
              <p className="eyebrow">Sau tối ưu</p>
              <h2>XM6 phù hợp khi nào?</h2>
              <p><strong>Trả lời:</strong> phù hợp để cân nhắc nếu cần ANC, pin dài và chuyển giữa laptop–điện thoại; vẫn nên thử độ thoải mái và micro.</p>
              <table style={{ minWidth: 0 }}><tbody><tr><th>Pin ANC*</th><td>Tối đa 30 giờ</td></tr><tr><th>Multipoint</th><td>2 thiết bị</td></tr><tr><th>Khối lượng</th><td>Khoảng 254 g</td></tr></tbody></table>
              <p><small>* AAC/SBC/LC3 theo Sony; cài đặt thực tế làm kết quả thay đổi. <Link href="/san-pham/sony-wh-1000xm6#nguon">Xem nguồn</Link>.</small></p>
              <details className="faq-item"><summary>ANC có xóa hết tiếng nói?</summary><p>Không. ANC giảm tiếng ồn, hiệu quả hơn với tiếng tần số thấp.</p></details>
            </article>
          </div>
        </section>
        <section>
          <h2>Đối chiếu 5 yêu cầu bài tập</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Yêu cầu</th><th>Trang / tệp minh chứng</th><th>Trạng thái</th></tr></thead>
              <tbody>{evidence.map((row) => <tr key={row.requirement}><th scope="row">{row.requirement}</th><td>{row.evidence}</td><td><StatusPill status={row.status} /></td></tr>)}</tbody>
            </table>
          </div>
          <p><strong>Chú thích:</strong> “Đã triển khai” nghĩa là đã có mã/tài liệu; “Đã kiểm tra” nghĩa là đã có kiểm thử cục bộ; “Cần kiểm tra thủ công” là bước cần trình duyệt, công cụ bên ngoài hoặc website public.</p>
        </section>
        <section>
          <h2>Điều chưa thể kết luận</h2>
          <ul>
            <li>Không thể kiểm tra AI tự phát hiện website khi website chỉ chạy localhost.</li>
            <li>Không có “điểm GEO”, biểu đồ tăng trưởng hoặc phản hồi ChatGPT giả.</li>
            <li>Schema hợp lệ không đồng nghĩa đủ rich result hoặc chắc chắn xuất hiện trên tìm kiếm.</li>
          </ul>
          <p>Xem cách đo thật trong <code>docs/ai-search-test-plan.md</code> và phần Local SEO minh họa tại <Link href="/cua-hang">trang cửa hàng demo</Link>.</p>
        </section>
      </div>
    </>
  );
}
