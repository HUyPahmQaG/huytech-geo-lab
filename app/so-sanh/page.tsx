import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { comparisonRows, sources } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "So sánh Sony WH-1000XM6 và WH-1000XM5",
  description: "Bảng so sánh Sony WH-1000XM6 với WH-1000XM5 theo cùng nguồn Sony: pin, codec, Bluetooth, khối lượng và multipoint.",
  path: "/so-sanh",
});

export default function ComparisonPage() {
  const comparisonSources = sources.filter((source) => source.id.startsWith("sony-xm6") || source.id.startsWith("sony-xm5"));
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "So sánh", path: "/so-sanh" }])} />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "So sánh" }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">So sánh cùng điều kiện nguồn</p>
          <h1>Sony WH-1000XM6 và WH-1000XM5: chọn mẫu nào?</h1>
          <p className="lede">XM6 thêm Bluetooth 5.3 và LC3 qua LE Audio, trong khi hai mẫu có pin công bố khá gần nhau. Nếu giá chênh đáng kể, hãy cân nhắc tính năng bạn thật sự dùng thay vì mặc định mẫu mới hơn luôn phù hợp hơn.</p>
        </div>
      </header>
      <div className="container content-section prose">
        <section>
          <h2>Câu trả lời nhanh</h2>
          <div className="answer-box">
            <p><strong>Ưu tiên XM6</strong> nếu bạn cần LC3/LE Audio, Bluetooth 5.3 và muốn thử hệ chống ồn mới hơn của Sony. <strong>Cân nhắc XM5</strong> nếu tìm được giá phù hợp và các khác biệt trên không quan trọng. Giá và bảo hành Việt Nam chưa được xác minh trong dự án.</p>
          </div>
        </section>
        <section>
          <h2>Bảng thông số đối chiếu</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Tiêu chí</th><th>WH-1000XM6</th><th>WH-1000XM5</th><th>Điều kiện / ghi chú</th></tr></thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.xm6}</td>
                    <td>{row.xm5}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><small>Bảng không dùng “điểm tổng” vì trọng số phụ thuộc nhu cầu. Ô thiếu bằng chứng được để “Chưa xác minh”.</small></p>
        </section>
        <section>
          <h2>Chọn theo tình huống</h2>
          <div className="grid-3">
            <article className="card"><h3>Laptop + điện thoại</h3><p>Cả hai đều hỗ trợ kết nối đồng thời hai thiết bị. Đây không phải lý do đủ để nâng cấp nếu XM5 đang đáp ứng tốt.</p></article>
            <article className="card"><h3>Ưu tiên pin</h3><p>Với AAC và ANC, cả hai được công bố tối đa 30 giờ. Codec và tính năng bật kèm làm thời lượng thay đổi.</p></article>
            <article className="card"><h3>Ngân sách có giới hạn</h3><p>So giá thực tế từ nhà bán uy tín và điều kiện bảo hành. HuyTech không có dữ liệu giá hoặc tồn kho đã xác minh.</p></article>
          </div>
        </section>
        <section>
          <h2>Giới hạn của so sánh</h2>
          <ul>
            <li>Đây là so sánh tài liệu, không phải bài đo ANC, micro hoặc chất âm trong phòng thử.</li>
            <li>Các con số pin là mức tối đa của Sony, không phải cam kết cho mọi người dùng.</li>
            <li>“Mẫu phù hợp hơn” là nhận định theo tình huống, không phải dữ kiện từ Sony.</li>
          </ul>
          <p>Xem thêm <Link href="/san-pham/sony-wh-1000xm6">hồ sơ chi tiết WH-1000XM6</Link> hoặc <Link href="/huong-dan/chon-tai-nghe-chong-on">hướng dẫn chọn theo môi trường</Link>.</p>
        </section>
        <section>
          <h2>Nguồn đối chiếu</h2>
          <SourceList items={comparisonSources} />
        </section>
      </div>
    </>
  );
}
