import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { baseUrl } from "@/lib/config";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { sources, updatedDate } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Cách chọn tai nghe chống ồn cho học tập và làm việc",
  description: "Hướng dẫn phân biệt ANC, cách âm thụ động và chất lượng micro; chọn tai nghe cho quán cà phê, họp online và di chuyển.",
  path: "/huong-dan/chon-tai-nghe-chong-on",
});

const path = "/huong-dan/chon-tai-nghe-chong-on";
const faqs = [
  { question: "Tai nghe chống ồn có chặn được tiếng người nói không?", answer: "Chỉ một phần. ANC thường hiệu quả hơn với âm nền đều, tần số thấp; phần đệm tai giúp cách âm thụ động thêm, nhưng không có nghĩa mọi tiếng nói sẽ biến mất." },
  { question: "Học trong quán cà phê nên chọn chụp tai hay nhét tai?", answer: "Chụp tai thường cho cảm giác bao phủ và pin dài; nhét tai gọn hơn khi di chuyển. Hãy thử độ kín, lực đeo và khả năng chịu nóng của chính bạn trước khi mua." },
  { question: "Nhiều microphone có đồng nghĩa họp tốt hơn không?", answer: "Không nhất thiết. Số lượng micro không tự quyết định chất lượng giọng nói; thuật toán, cách đeo, phòng, gió, thiết bị nguồn và ứng dụng họp đều ảnh hưởng." },
  { question: "Có nên bật ANC cả ngày không?", answer: "Tùy sự thoải mái và nhu cầu. Nên nghỉ tai định kỳ, nghe âm lượng vừa và dùng chế độ xuyên âm khi cần nhận biết giao thông hoặc thông báo xung quanh." },
];

export default function GuidePage() {
  const articleId = new URL(`${path}#article`, baseUrl).toString();
  const schema = [
    breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Hướng dẫn", path }]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": articleId,
      headline: "Cách chọn tai nghe chống ồn cho học tập và làm việc",
      description: "Hướng dẫn chọn tai nghe theo tiếng ồn, cách đeo, micro và tình huống sử dụng.",
      datePublished: "2026-09-22",
      dateModified: updatedDate,
      inLanguage: "vi-VN",
      mainEntityOfPage: new URL(path, baseUrl).toString(),
      author: { "@id": new URL("/#organization", baseUrl).toString() },
      publisher: { "@id": new URL("/#organization", baseUrl).toString() },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": new URL(`${path}#faq`, baseUrl).toString(),
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ];
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Hướng dẫn chọn tai nghe chống ồn" }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Hướng dẫn nguyên bản · Không giả nhận đã thử</p>
          <h1>Cách chọn tai nghe chống ồn cho học tập, làm việc và di chuyển</h1>
          <p className="lede">Hãy chọn theo loại tiếng ồn, thời gian đeo, thiết bị kết nối và nhu cầu gọi họp. ANC không phải “bức tường im lặng”, còn thông số micro không thay thế phép thử thực tế.</p>
        </div>
      </header>
      <article className="narrow content-section prose">
        <section>
          <h2>Tóm tắt 30 giây</h2>
          <div className="answer-box">
            <ul>
              <li><strong>Tiếng xe, máy lạnh, động cơ:</strong> ưu tiên ANC.</li>
              <li><strong>Tiếng nói, tiếng gõ bàn phím:</strong> cần cả độ kín và cách âm thụ động; ANC không loại bỏ hết.</li>
              <li><strong>Họp online:</strong> thử micro trên đúng ứng dụng và thiết bị.</li>
              <li><strong>Đeo nhiều giờ:</strong> thử lực kẹp, nhiệt, khối lượng và kích thước đệm tai.</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>ANC, cách âm thụ động và micro khác nhau thế nào?</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Khái niệm</th><th>Làm gì?</th><th>Giới hạn</th></tr></thead>
              <tbody>
                <tr><th scope="row">ANC</th><td>Micro thu tiếng ngoài, hệ thống tạo tín hiệu đối pha để giảm tiếng ồn.</td><td>Thường hiệu quả hơn với âm đều, tần số thấp; không triệt hoàn toàn mọi âm.</td></tr>
                <tr><th scope="row">Cách âm thụ động</th><td>Đệm tai hoặc nút tai tạo độ kín vật lý, giảm âm đi vào tai.</td><td>Phụ thuộc độ vừa vặn; có thể nóng hoặc gây áp lực khi đeo lâu.</td></tr>
                <tr><th scope="row">Micro đàm thoại</th><td>Thu giọng nói gửi tới người bên kia cuộc gọi.</td><td>Không quyết định bởi số micro đơn lẻ; gió, tiếng nền và ứng dụng đều ảnh hưởng.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2>Chọn theo tình huống sử dụng</h2>
          <h3>Học trong thư viện hoặc quán cà phê</h3>
          <p>Ưu tiên độ thoải mái và cách âm vừa đủ. Nếu cần tập trung nhưng vẫn nghe thông báo, hãy kiểm tra chế độ xuyên âm. Không tăng âm lượng chỉ để át tiếng người nói.</p>
          <h3>Họp online và làm việc hybrid</h3>
          <p>Kiểm tra chuyển đổi giữa laptop–điện thoại, độ ổn định Bluetooth và vị trí nút tắt micro. Thu một đoạn giọng nói trong phòng thật trước khi quyết định.</p>
          <h3>Đi xe buýt, tàu hoặc máy bay</h3>
          <p>ANC và pin dài hữu ích với tiếng động cơ đều. Thiết kế gập, hộp đựng, khối lượng và khả năng dùng cáp cũng đáng cân nhắc.</p>
          <h3>Đi bộ và tham gia giao thông</h3>
          <p>An toàn quan trọng hơn mức chống ồn. Dùng chế độ nghe âm thanh xung quanh khi cần nhận biết phương tiện; tuân thủ quy định địa phương.</p>
        </section>
        <section>
          <h2>Checklist thử tai nghe trong 10 phút</h2>
          <ol>
            <li>Đeo đúng cách, kiểm tra đệm có kín đều và gọng có tạo điểm đau.</li>
            <li>Bật/tắt ANC với tiếng điều hòa hoặc tiếng xe; không chỉ thử bằng nhạc.</li>
            <li>Gọi thử trên ứng dụng bạn dùng và nghe lại bản thu.</li>
            <li>Chuyển giữa hai thiết bị nếu multipoint là tiêu chí.</li>
            <li>Kiểm tra thao tác nút hoặc cảm ứng khi đeo kính.</li>
            <li>Xác minh bảo hành, đổi trả và giá tại đúng nhà bán.</li>
          </ol>
        </section>
        <section>
          <h2>Ví dụ áp dụng với Sony WH-1000XM6</h2>
          <p>Thông số Sony cho thấy mẫu này có ANC, pin tối đa 30 giờ ở một số codec khi bật ANC, Bluetooth 5.3 và multipoint. Những dữ kiện đó đưa sản phẩm vào danh sách cân nhắc cho người dùng laptop–điện thoại, nhưng chưa trả lời được bạn có thấy thoải mái hay micro có hợp phòng của bạn không.</p>
          <p><Link href="/san-pham/sony-wh-1000xm6">Xem dữ kiện và FAQ của WH-1000XM6</Link>, sau đó <Link href="/so-sanh">đối chiếu với WH-1000XM5</Link>.</p>
        </section>
        <section>
          <h2>Câu hỏi thường gặp</h2>
          <FaqList items={faqs} />
        </section>
        <section>
          <h2>Nguồn và phạm vi</h2>
          <p>Bài viết dùng tài liệu Sony để giải thích cơ chế ANC và giới hạn. Phần checklist là phương pháp biên soạn của dự án, không phải trích dẫn hay lời khuyên y tế.</p>
          <SourceList items={sources.filter((source) => ["sony-xm6-anc", "sony-xm6-specs", "sony-xm6-battery"].includes(source.id))} />
        </section>
      </article>
    </>
  );
}
