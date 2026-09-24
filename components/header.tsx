import Link from "next/link";
import { navigation } from "@/data/site";

function NavLinks() {
  return navigation.map((item) => (
    <Link key={item.href} href={item.href}>{item.label}</Link>
  ));
}

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Bỏ qua điều hướng</a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="HuyTech GEO Lab — Trang chủ">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>HuyTech <b>GEO Lab</b></span>
        </Link>
        <details className="mobile-nav">
          <summary className="menu-button">
            <span className="sr-only">Mở hoặc đóng menu</span>
            <span aria-hidden="true">☰</span>
          </summary>
          <nav id="primary-navigation" aria-label="Điều hướng chính" className="nav">
            <NavLinks />
          </nav>
        </details>
        <nav aria-label="Điều hướng chính" className="desktop-nav">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
