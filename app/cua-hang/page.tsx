import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { localBusiness, sources } from "@/data/site";

export const metadata: Metadata = pageMetadata({
  title: "Minh họa Local SEO tại Thanh Xuân",
  description: "Trang minh họa Local SEO cho HuyTech GEO Lab, công khai dữ liệu địa điểm còn thiếu và không phát LocalBusiness giả.",
  path: "/cua-hang",
  noindex: true,
});

const codeExample = `{
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  "name": "[TÊN DOANH NGHIỆP THẬT]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ĐỊA CHỈ ĐÃ XÁC MINH]",
    "addressLocality": "Thanh Xuân",
    "addressRegion": "Hà Nội",
    "addressCountry": "VN"
  },
  "telephone": "[SỐ ĐIỆN THOẠI THẬT]",
  "openingHours": "[GIỜ MỞ CỬA THẬT]"
}`;

export default function StorePage() {
  const localSource = sources.find((source) => source.id === "google-local");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Local SEO", path: "/cua-hang" }])} />
      <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Minh họa Local SEO" }]} />
      <header className="page-hero">
        <div className="container">
          <p className="eyebrow">Noindex · Chỉ dùng để minh họa</p>
          <h1>Minh họa Local SEO tại Thanh Xuân, Hà Nội</h1>
          <p className="lede">HuyTech là thương hiệu giả định cho bài tập. Trang này không đại diện cho cửa hàng đang hoạt động và không cung cấp chỉ đường, gọi điện hay đặt hàng.</p>
        </div>
      </header>
      <div className="container content-section prose">
        <div className="callout">
          <p><strong>Thông báo demo:</strong> “Thanh Xuân, Hà Nội” chỉ là khu vực minh họa. Không có địa chỉ, số điện thoại, giờ mở cửa hoặc tọa độ thật đã xác minh.</p>
        </div>
        <section>
          <h2>Dữ liệu doanh nghiệp hiện có</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Trường</th><th>Giá trị cấu hình</th><th>Trạng thái</th></tr></thead>
              <tbody>
                <tr><th scope="row">Tên</th><td>{localBusiness.name}</td><td>Thương hiệu giả định</td></tr>
                <tr><th scope="row">Khu vực minh họa</th><td>{localBusiness.areaIllustration}</td><td>Không phải địa chỉ</td></tr>
                <tr><th scope="row">Địa chỉ</th><td>{localBusiness.address ?? "Chưa có"}</td><td>Cần dữ liệu thật</td></tr>
                <tr><th scope="row">Điện thoại</th><td>{localBusiness.telephone ?? "Chưa có"}</td><td>Cần dữ liệu thật</td></tr>
                <tr><th scope="row">Giờ mở cửa</th><td>{localBusiness.openingHours ?? "Chưa có"}</td><td>Cần dữ liệu thật</td></tr>
                <tr><th scope="row">Tọa độ</th><td>Chưa có</td><td>Cần xác minh tại địa điểm</td></tr>
                <tr><th scope="row">URL bản đồ</th><td>{localBusiness.mapUrl ?? "Chưa có"}</td><td>Chỉ thêm sau khi xác minh</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2>NAP và hồ sơ doanh nghiệp</h2>
          <p><strong>NAP</strong> là Name–Address–Phone (tên–địa chỉ–điện thoại). Ba dữ liệu này cần nhất quán giữa website, hồ sơ doanh nghiệp và các nguồn công khai.</p>
          <p>Chỉ tạo Google Business Profile khi có doanh nghiệp đủ điều kiện và hoàn thành quy trình xác minh phù hợp. Dữ liệu đầy đủ, giờ hoạt động, ảnh thật và đánh giá thật giúp người dùng đánh giá địa điểm; không được tạo hồ sơ cho cửa hàng giả định này.</p>
          <p>Google cho biết kết quả địa phương chủ yếu phụ thuộc <strong>mức liên quan, khoảng cách và độ nổi bật</strong>. Vì khoảng cách thay đổi theo người tìm, không thể bảo đảm “đứng đầu gần đây”.</p>
          {localSource && <p>Nguồn: <a href={localSource.url} target="_blank" rel="noreferrer">{localSource.name}</a> — kiểm tra {localSource.checked}.</p>}
        </section>
        <section>
          <h2>Ví dụ LocalBusiness chỉ để đọc</h2>
          <p>Đoạn dưới được hiển thị như văn bản, <strong>không phải JSON-LD đang hoạt động</strong>. Chỉ thay placeholder và phát schema sau khi dữ liệu thật đã được xác minh.</p>
          <pre className="code-block" tabIndex={0}><code>{codeExample}</code></pre>
        </section>
        <section>
          <h2>Điều kiện để bật trang thật</h2>
          <ul>
            <li>Có pháp nhân/chủ thể kinh doanh và quyền đại diện phù hợp.</li>
            <li>Xác minh NAP, giờ mở cửa, tọa độ, URL bản đồ và ảnh địa điểm.</li>
            <li>Bỏ noindex, đưa trang vào sitemap và kiểm thử canonical sau khi domain thật sẵn sàng.</li>
            <li>Sinh ElectronicsStore từ cùng cấu hình hiển thị; không thêm review, rating hoặc offer không có căn cứ.</li>
          </ul>
          <p>Xem <Link href="/demo-geo">bảng đối chiếu yêu cầu GEO</Link> hoặc <Link href="/gioi-thieu">phương pháp biên soạn</Link>.</p>
        </section>
      </div>
    </>
  );
}
