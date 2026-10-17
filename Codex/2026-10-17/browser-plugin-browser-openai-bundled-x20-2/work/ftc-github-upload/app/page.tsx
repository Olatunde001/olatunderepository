import Link from "next/link";
import { CTA, Eyebrow, SectionHeading } from "@/components/sections";

const pillars = [
  { num: "01", title: "Academic programmes", text: "National Diploma and Higher National Diploma pathways designed for applied learning and professional growth.", href: "/academics", icon: "⌑" },
  { num: "02", title: "In-service training", text: "Practical learning opportunities that support the development of serving officers across the public service.", href: "/training", icon: "↗" },
  { num: "03", title: "Institutional standards", text: "A commitment to relevant curricula, quality teaching and responsible academic practice.", href: "/academics", icon: "✳" },
];

export default function Home() {
  return <main id="main">
    <section className="home-hero"><div className="container home-hero-inner"><div className="hero-copy"><Eyebrow>Learning in service of the nation</Eyebrow><h1>Building the capability to <em>serve better.</em></h1><p>Federal Training Centre, Enugu supports academic learning and professional development for a stronger, more capable public service.</p><div className="hero-actions"><Link className="button button-gold" href="/academics">Explore academics <span aria-hidden="true">↗</span></Link><Link className="text-link text-link-light" href="/about">Discover the Centre <span aria-hidden="true">→</span></Link></div><div className="hero-note"><span className="note-line" /><span>Under the Office of the Head of the Civil Service of the Federation</span></div></div><div className="hero-visual"><div className="hero-photo" role="img" aria-label="Students walking across a university campus" /><div className="hero-stamp"><span>FTC</span><small>Enugu<br/>Nigeria</small></div><div className="hero-caption"><span>01 / 05</span><span>Knowledge. Service. Progress.</span></div></div></div><div className="hero-bottom container"><span>FEDERAL TRAINING CENTRE · ENUGU</span><span className="scroll-cue"><i /> Scroll to explore</span></div></section>

    <section className="intro-section section-pad"><div className="container intro-grid"><div><Eyebrow>Our purpose</Eyebrow><h2>Learning that strengthens <em>public service.</em></h2></div><div className="intro-copy"><p>We are a federal training institution in Enugu, bringing together academic programmes and professional learning in support of effective public administration.</p><Link className="text-link" href="/about">Get to know us <span aria-hidden="true">→</span></Link></div></div></section>

    <section className="pillars-section section-pad"><div className="container"><SectionHeading eyebrow="What we do" title="A place to learn, grow and contribute." text="Explore the Centre’s academic and professional learning pathways."/><div className="pillar-grid">{pillars.map((p) => <Link className="pillar-card" href={p.href} key={p.num}><span className="pillar-top"><span>{p.num}</span><span className="pillar-icon" aria-hidden="true">{p.icon}</span></span><h3>{p.title}</h3><p>{p.text}</p><span className="card-arrow" aria-hidden="true">↗</span></Link>)}</div></div></section>

    <section className="welcome-section section-pad"><div className="container welcome-grid"><div className="welcome-image" role="img" aria-label="A public service training seminar" /><div className="welcome-copy"><Eyebrow>A welcome from the Provost</Eyebrow><h2>Committed to learning with <em>purpose.</em></h2><p>Welcome to the Federal Training Centre, Enugu. Our community brings together learners, educators and public servants with a shared commitment to knowledge and service.</p><p>We invite you to explore our programmes and discover how learning at the Centre can support your next step.</p><div className="signature"><span className="signature-mark">FTC</span><span><strong>Office of the Provost</strong><small>Federal Training Centre, Enugu</small></span></div><Link className="text-link" href="/about">About the Centre <span aria-hidden="true">→</span></Link></div></div></section>

    <CTA title="Your next step starts with learning." text="Find a programme or training pathway that supports your goals." href="/academics" label="View our programmes" />
  </main>;
}
