import type { Metadata } from "next";
import Link from "next/link";
import { CTA, Eyebrow, PageHero, SectionHeading } from "@/components/sections";

export const metadata: Metadata = { title: "Academics & Accreditation" };
const programs = [
  { level: "NATIONAL DIPLOMA · ND", title: "National Diploma pathways", text: "Programme names, current availability, entry requirements and session dates will be published here once confirmed by the Centre." },
  { level: "HIGHER NATIONAL DIPLOMA · HND", title: "Higher National Diploma pathways", text: "HND programme names, current availability, entry requirements and session dates will be published here once confirmed by the Centre." },
];

export default function AcademicsPage() {
  return <main id="main"><PageHero label="Academics & accreditation" title="Education for a changing public service." intro="Explore National Diploma and Higher National Diploma pathways at the Federal Training Centre, Enugu." image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85" />
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="Academic programmes" title="Build your next chapter." text="Explore National Diploma and Higher National Diploma study at the Centre. Current course names, availability and entry requirements should be confirmed with the Centre before applying."/><div className="program-grid">{programs.map((p, i) => <article className="program-card" key={p.level}><div className="program-meta"><span>{p.level}</span><span>0{i + 1}</span></div><h3>{p.title}</h3><p>{p.text}</p><Link href="/about" className="text-link">Contact the Centre <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
    <section className="accreditation-section"><div className="container accreditation-grid"><div><Eyebrow>Quality & standards</Eyebrow><h2>Grounded in recognised <em>standards.</em></h2><p>Academic programmes at Nigerian tertiary institutions are subject to relevant regulatory and accreditation requirements. For current accreditation status, approved programme lists and admission details, please contact the Centre or consult the appropriate official regulator.</p><Link className="button button-gold" href="/news">See announcements <span aria-hidden="true">↗</span></Link></div><div className="accreditation-note"><span className="seal" aria-hidden="true">FTC</span><h3>Accreditation information</h3><p>We are preparing verified programme and accreditation details for publication. Please contact the Centre for the latest official information.</p></div></div></section>
    <section className="section-pad admission-section"><div className="container admission-grid"><div className="admission-image" role="img" aria-label="Students studying together" /><div><Eyebrow>Admissions</Eyebrow><h2>Start with the right information.</h2><p>Admission requirements, session dates and available programmes can change. Contact the Centre to confirm current details before applying.</p><ul className="check-list"><li>Confirm programme availability</li><li>Ask about current entry requirements</li><li>Check application dates and process</li></ul><Link className="text-link" href="/news">Latest announcements <span aria-hidden="true">→</span></Link></div></div></section>
    <CTA title="Have a question about a programme?" text="Reach out to the Centre for current academic and admissions information." href="/about" label="Contact the Centre" />
  </main>;
}
