import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqList } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { baseUrl } from "@/lib/config";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { product, sources, updatedDate } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [{ slug: product.slug }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== product.slug) return {};
  return pageMetadata({
    title: "Sony WH-1000XM6: thông số và tư vấn theo nhu cầu",
    description: "Sony WH-1000XM6 có phù hợp học tập, họp online và di chuyển? Xem thông số có nguồn, ưu nhược điểm và giới hạn cần thử trực tiếp.",
    path: `/san-pham/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== product.slug) notFound();

  const productSources = sources.filter((source) => source.id.startsWith("sony-xm6"));
  const path = `/san-pham/${product.slug}`;
  const productId = new URL(`${path}#product`, baseUrl).toString();
  const schema = [
    breadcrumbSchema([
      { name: "Trang chủ", path: "/" },
      { name: "Sony WH-1000XM6", path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": productId,
      name: product.name,
      description: product.directAnswer,
      category: product.category,
      brand: { "@type": "Brand", name: product.brand },
      model: product.model,
      url: new URL(path, baseUrl).toString(),
      additionalProperty: product.specs.slice(0, 8).map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": new URL(`${path}#faq`, baseUrl).toString(),
      mainEntity: product.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
      about: { "@id": productId },
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: product.name }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Hồ sơ sản phẩm · Kiểm tra nguồn 22/09/2026</p>
          <h1>Sony WH-1000XM6: có phù hợp với bạn?</h1>
          <p className="lede">Tai nghe chụp tai chống ồn cho học tập, làm việc và di chuyển — phân tích từ tài liệu Sony, không phải bài đánh giá trải nghiệm.</p>
        </div>
      </header>

      <div className="container content-section prose">
        <section aria-labelledby="tra-loi-truc-tiep">
          <h2 id="tra-loi-truc-tiep">Câu trả lời trực tiếp</h2>
          <div className="answer-box"><p>{product.directAnswer}</p></div>
          <p><strong>Kết luận biên soạn:</strong> nên đưa XM6 vào danh sách thử nếu ưu tiên ANC, pin dài và chuyển giữa laptop–điện thoại. Đây là suy luận từ tính năng; không phải kết quả thử nghiệm độc lập.</p>
        </section>

        <section aria-labelledby="thong-so">
          <h2 id="thong-so">Thông số đã xác minh</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Tiêu chí</th><th>Dữ liệu</th><th>Nguồn</th></tr></thead>
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label}>
                    <th scope="row">{spec.label}</th>
                    <td>{spec.value}</td>
                    <td><a className="source-ref" href={`#source-${spec.sourceId}`}>Xem nguồn</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><small>Thời lượng pin là mức tối đa do Sony công bố; codec, âm lượng, EQ, DSEE Extreme, nhiệt độ và tính năng đang bật có thể làm kết quả thay đổi.</small></p>
        </section>

        <section className="grid-2" aria-label="Đối tượng phù hợp">
          <div className="card">
            <h2>Phù hợp với ai?</h2>
            <ul>{product.goodFor.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Không phù hợp với ai?</h2>
            <ul>{product.notFor.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section aria-labelledby="uu-nhuoc">
          <h2 id="uu-nhuoc">Ưu và nhược điểm từ dữ liệu hiện có</h2>
          <div className="grid-2">
            <div><h3>Điểm thuận lợi</h3><ul>{product.pros.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>Điểm cần cân nhắc</h3><ul>{product.cons.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
          <div className="callout">
            <p><strong>Chưa xác minh:</strong> giá bán phù hợp tại Việt Nam, tồn kho, thời hạn bảo hành theo từng nhà bán và độ thoải mái khi đeo lâu. Hãy xem giá tại nguồn và thử trực tiếp; HuyTech không bán sản phẩm này.</p>
          </div>
        </section>

        <section aria-labelledby="tinh-huong">
          <h2 id="tinh-huong">Kết luận theo tình huống</h2>
          <div className="grid-3">
            <article className="card"><h3>Học trong quán cà phê</h3><p>ANC có thể giảm tiếng máy lạnh và tiếng nền đều, nhưng không triệt hết cuộc trò chuyện gần. Nên nghe ở mức âm lượng vừa.</p></article>
            <article className="card"><h3>Họp online</h3><p>Có micro, gọi rảnh tay và multipoint. Chất lượng thực tế vẫn cần thử với ứng dụng họp và phòng của bạn.</p></article>
            <article className="card"><h3>Đi tàu, xe, máy bay</h3><p>Pin và ANC là lợi thế theo thông số; thiết bị không kháng nước nên cần tránh mưa và cổng sạc ẩm.</p></article>
          </div>
          <p>Muốn đặt XM6 cạnh mẫu trước? <Link href="/so-sanh">Xem bảng Sony WH-1000XM6 và WH-1000XM5</Link>. Nếu chưa chắc nên chọn chụp tai hay nhét tai, hãy đọc <Link href="/huong-dan/chon-tai-nghe-chong-on">hướng dẫn theo nhu cầu</Link>.</p>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq">Câu hỏi thường gặp</h2>
          <FaqList items={product.faqs} />
        </section>

        <section aria-labelledby="nguon">
          <h2 id="nguon">Nguồn gần nội dung</h2>
          <p>Dữ kiện từ nhà sản xuất; nhận định tư vấn được ghi rõ là kết luận biên soạn. Kiểm tra lần cuối <time dateTime={updatedDate}>22/09/2026</time>.</p>
          <SourceList items={productSources} />
        </section>
      </div>
    </>
  );
}
