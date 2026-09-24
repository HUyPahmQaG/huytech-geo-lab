import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="narrow">
        <p className="eyebrow">Lỗi 404</p>
        <h1>Không tìm thấy trang</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>Đường dẫn có thể đã sai hoặc nội dung chưa được xuất bản.</p>
        <div className="actions">
          <Link className="button" href="/">Về trang chủ</Link>
          <Link className="button secondary" href="/huong-dan/chon-tai-nghe-chong-on">Đọc hướng dẫn chọn tai nghe</Link>
        </div>
      </div>
    </section>
  );
}
