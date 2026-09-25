import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { baseUrl } from "@/lib/config";
import { product } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Tai nghe chống ồn cho sinh viên theo ngân sách",
  description: "HuyTech hướng dẫn chọn tai nghe chống ồn cho sinh viên theo nhu cầu và ngân sách; có checklist, nguồn kiểm tra được và không tự tạo giá bán.",
  path: "/",
});

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": new URL("/#webpage", baseUrl).toString(),
  name: "Tai nghe chống ồn cho sinh viên theo nhu cầu và ngân sách",
  description: "Trang HuyTech hướng dẫn sinh viên chọn tai nghe chống ồn theo tình huống sử dụng và ngân sách.",
  isPartOf: { "@id": new URL("/#website", baseUrl).toString() },
  about: { "@id": new URL(`/san-pham/${product.slug}#product`, baseUrl).toString() },
  inLanguage: "vi-VN",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Tư vấn có nguồn · Không nhận hoa hồng</p>
            <h1>Tai nghe chống ồn cho sinh viên: chọn theo nhu cầu và ngân sách</h1>
            <p className="lede" style={{ marginTop: "1.25rem" }}>
              Nếu bạn đang tìm tai nghe chống ồn cho sinh viên giá rẻ, hãy bắt đầu từ mức ngân sách, loại tiếng ồn và thời gian đeo. HuyTech tóm tắt dữ kiện, chỉ rõ phần nhận định và không tự tạo giá bán chưa được xác minh.
            </p>
            <div className="actions">
              <Link className="button" href="/san-pham/sony-wh-1000xm6">Xem Sony WH-1000XM6</Link>
              <Link className="button secondary" href="/huong-dan/chon-tai-nghe-chong-on">Chọn theo ngân sách sinh viên</Link>
            </div>
          </div>
          <div className="hero-art">
            <Image
              src="/headphones-illustration.svg"
              alt="Minh họa cách điệu một tai nghe chụp tai chống ồn, không phải ảnh Sony WH-1000XM6 thực tế"
              width={960}
              height={720}
              priority
            />
            <p className="image-note">Hình minh họa tự tạo, không phải ảnh sản phẩm thực tế.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Câu trả lời ngắn</p>
            <h2>WH-1000XM6 đáng cân nhắc nếu bạn cần ANC và dùng hai thiết bị</h2>
            <p className="lede">{product.directAnswer}</p>
          </div>
          <div className="fact-strip" aria-label="Thông số nổi bật">
            <div className="fact"><b>254 g</b><span>Khối lượng xấp xỉ</span></div>
            <div className="fact"><b>30 giờ</b><span>Pin tối đa với ANC*</span></div>
            <div className="fact"><b>2 thiết bị</b><span>Kết nối multipoint</span></div>
            <div className="fact"><b>Bluetooth 5.3</b><span>SBC, AAC, LDAC, LC3</span></div>
          </div>
          <p className="image-note" style={{ textAlign: "left" }}>* Theo điều kiện và codec Sony công bố; thời lượng thực tế thay đổi theo cài đặt.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Ba câu hỏi trước khi chọn</p>
            <h2>Đừng bắt đầu bằng tên sản phẩm</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="card-icon" aria-hidden="true">01</span>
              <h3>Bạn cần giảm loại tiếng ồn nào?</h3>
              <p>ANC hữu ích nhất với tiếng nền đều, tần số thấp. Tiếng nói gần vẫn có thể nghe thấy.</p>
            </article>
            <article className="card">
              <span className="card-icon" aria-hidden="true">02</span>
              <h3>Bạn đeo liên tục bao lâu?</h3>
              <p>Khối lượng chỉ là một phần; lực kẹp, nhiệt và hình dáng đầu cần được thử trực tiếp.</p>
            </article>
            <article className="card">
              <span className="card-icon" aria-hidden="true">03</span>
              <h3>Bạn gọi họp ở đâu?</h3>
              <p>Thông số micro không thay thế phép thử trên đúng ứng dụng, thiết bị và môi trường thực tế.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Đối chiếu có kiểm soát</p>
            <h2>XM6 khác XM5 ở điểm nào?</h2>
            <p>So sánh cùng nguồn Sony về Bluetooth, codec, pin, khối lượng và kết nối. Ô chưa có dữ liệu được ghi “Chưa xác minh”.</p>
            <Link className="button secondary" href="/so-sanh">Mở bảng so sánh</Link>
          </div>
          <div>
            <p className="eyebrow">Hiểu trước khi mua</p>
            <h2>ANC không phải cách âm tuyệt đối</h2>
            <p>Hướng dẫn phân biệt chống ồn chủ động, cách âm thụ động và chất lượng micro theo từng tình huống.</p>
            <Link className="button secondary" href="/huong-dan/chon-tai-nghe-chong-on">Đọc hướng dẫn chọn</Link>
          </div>
        </div>
      </section>

      <section className="section blue">
        <div className="container grid-2">
          <div>
            <p className="eyebrow" style={{ color: "#68a0ff" }}>Minh bạch phương pháp</p>
            <h2>Nội dung dễ kiểm tra, không hứa xếp hạng</h2>
          </div>
          <div>
            <ul>
              <li>Dữ kiện kỹ thuật dẫn về trang hỗ trợ hoặc trang sản phẩm của nhà sản xuất.</li>
              <li>Nhận định tư vấn được tách khỏi thông số đã xác minh.</li>
              <li>Giá, tồn kho và bảo hành Việt Nam chưa đủ căn cứ sẽ không được tự điền.</li>
              <li>GEO hỗ trợ khả năng được hiểu và trích dẫn, không bảo đảm xuất hiện trong câu trả lời AI.</li>
            </ul>
            <div className="actions">
              <Link className="button" href="/gioi-thieu#nguon">Xem toàn bộ nguồn</Link>
              <Link className="button secondary" href="/demo-geo">Xem demo GEO</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
