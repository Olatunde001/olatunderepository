import type { Metadata } from "next";
import { Eyebrow, PageHero, SectionHeading } from "@/components/sections";

export const metadata: Metadata = { title: "News & Announcements" };
const updates = [
  { tag: "Admissions", date: "Updates coming soon", title: "Academic session and admissions information", text: "Contact the Centre for current information about application timelines, programme availability and entry requirements.", featured: true },
  { tag: "Centre news", date: "Updates coming soon", title: "News from the Federal Training Centre, Enugu", text: "This space will share verified institutional news, programme highlights and important notices from the Centre." },
  { tag: "Training", date: "Updates coming soon", title: "Professional development opportunities", text: "Check here for information about in-service learning and professional development for public officers." },
];

export default function NewsPage() {
  return <main id="main"><PageHero label="News & announcements" title="The latest from the Centre." intro="Institutional updates, academic notices and information for students and public officers." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85" />
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="Stay informed" title="News and notices." text="Official updates will be published here as they are confirmed by the Centre."/><div className="news-grid">{updates.map((item, i) => <article className={`news-card ${item.featured ? "news-featured" : ""}`} key={item.title}><div className={`news-thumb news-thumb-${i + 1}`} role="img" aria-label="Federal Training Centre news"/><div className="news-body"><div className="news-meta"><span>{item.tag}</span><span>{item.date}</span></div><h3>{item.title}</h3><p>{item.text}</p><span className="news-read">Official updates <span aria-hidden="true">↗</span></span></div></article>)}</div><p className="news-note"><strong>For urgent enquiries:</strong> please contact the Centre directly for the most up-to-date information.</p></div></section>
    <section className="subscribe-section"><div className="container subscribe-inner"><div><Eyebrow>Centre information</Eyebrow><h2>Looking for a specific update?</h2><p>Contact the Centre for current admissions, academic calendar or training information.</p></div><a className="button button-gold" href="mailto:info@ftcenugu.gov.ng">Email the Centre <span aria-hidden="true">↗</span></a></div></section>
  </main>;
}
