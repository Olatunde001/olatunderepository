import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow"><i />{children}</span>; }

export function PageHero({ label, title, intro, image, compact = false }: { label: string; title: string; intro: string; image: string; compact?: boolean }) {
  return <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={{ "--hero-image": `url("${image}")` } as React.CSSProperties}>
    <div className="container page-hero-content"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{intro}</p><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{label}</span></div></div>
  </section>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function CTA({ title, text, href = "/academics", label = "Explore programmes" }: { title: string; text: string; href?: string; label?: string }) {
  return <section className="cta-band"><div className="container cta-inner"><div><Eyebrow>Take the next step</Eyebrow><h2>{title}</h2><p>{text}</p></div><Link className="button button-light" href={href}>{label}<span aria-hidden="true">↗</span></Link></div></section>;
}
