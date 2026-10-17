"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"], ["About Us", "/about"], ["Academics & Accreditation", "/academics"],
  ["In-Service Training", "/training"], ["News & Announcements", "/news"],
];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <div className="topline"><div className="container topline-inner"><span>Federal Republic of Nigeria</span><span>Office of the Head of the Civil Service of the Federation</span></div></div>
    <header className="header"><div className="container header-inner">
      <Link className="brand" href="/" aria-label="Federal Training Centre Enugu home">
        <span className="brand-mark" aria-hidden="true"><span>FTC</span><i /></span>
        <span className="brand-copy"><strong>Federal Training Centre</strong><small>ENUGU · NIGERIA</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span className="sr-only">{open ? "Close menu" : "Open menu"}</span><i /><i /><i /></button>
      <nav id="primary-navigation" className={`navigation ${open ? "navigation-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
    </div></header>
  </>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-main">
    <div className="footer-about"><Link className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true"><span>FTC</span><i /></span><span className="brand-copy"><strong>Federal Training Centre</strong><small>ENUGU · NIGERIA</small></span></Link><p>Developing knowledge, skills and professional capacity in service of the nation.</p></div>
    <div><h2>Explore</h2><ul><li><Link href="/about">About the Centre</Link></li><li><Link href="/academics">Academic programmes</Link></li><li><Link href="/training">In-service training</Link></li><li><Link href="/news">News & announcements</Link></li></ul></div>
    <div><h2>Contact</h2><address>Abakaliki Road, Emene<br />Enugu State, Nigeria<br /><a href="mailto:support@ftcenugu.ng">support@ftcenugu.ng</a><br /><a href="tel:+2348133420457">+234 813 342 0457</a></address></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Federal Training Centre, Enugu</span><span>Office of the Head of the Civil Service of the Federation</span></div></footer>;
}
