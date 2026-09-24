import Link from "next/link";
import { updatedDate } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">HuyTech GEO Lab</p>
          <p>Dự án học tập — không phải cửa hàng, đại lý Sony hay dịch vụ tư vấn trả phí.</p>
        </div>
        <div>
          <p className="footer-title">Khám phá</p>
          <ul className="footer-links">
            <li><Link href="/demo-geo">Demo trước / sau GEO</Link></li>
            <li><Link href="/gioi-thieu#nguon">Nguồn tham khảo</Link></li>
            <li><Link href="/cua-hang">Minh họa Local SEO</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-title">Trạng thái dữ liệu</p>
          <p>Cập nhật và kiểm tra nguồn: <time dateTime={updatedDate}>22/09/2026</time>.</p>
        </div>
      </div>
    </footer>
  );
}
