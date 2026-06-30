import { useState } from "react";
import { ArrowRight, Check, Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Navbar          from "../../components/Navbar/Navbar";
import Footer          from "../../components/Footer/Footer";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import "./CosmeticInjections.css";

const TREATMENTS = [
  {
    num: "01",
    title: "Neuromodulators",
    sub: "Wrinkle relaxers · Natural movement · Preventive care",
    desc: "Neuromodulators temporarily relax targeted facial muscles to soften dynamic expression lines — crow's feet, forehead lines, frown lines — while preserving natural facial movement. Results develop within days and last 3–4 months.",
    accent: "#a0b8d0",
    benefits: ["Softens forehead lines and crow's feet", "Reduces frown lines and brow furrows", "Preserves natural facial expression", "Results in 5–7 days, lasting 3–4 months", "Preventive use to slow future wrinkle formation"],
  },
  {
    num: "02",
    title: "Dermal Fillers",
    sub: "Volume restoration · Contour · Hydration",
    desc: "Hyaluronic acid dermal fillers restore lost facial volume, enhance contours, and improve hydration in targeted areas. From subtle lip enhancement to cheek definition and jawline sculpting — results are immediate and last 9–18 months.",
    accent: "#c8b4a0",
    benefits: ["Restores cheek volume and projection", "Enhances and defines lip shape", "Sculpts the jawline and chin", "Reduces nasolabial folds and marionette lines", "Immediate results lasting 9–18+ months"],
  },
  {
    num: "03",
    title: "Collagen Stimulators",
    sub: "Long-term regeneration · Progressive results",
    desc: "Collagen stimulators such as Sculptra and Radiesse work gradually by triggering the body's natural collagen production. Results develop progressively over weeks and can last 2 years or more — ideal for patients seeking long-term facial rejuvenation.",
    accent: "#b0c8b8",
    benefits: ["Stimulates natural collagen production", "Progressive improvement over 2–3 months", "Results lasting up to 2 years or more", "Restores facial volume and skin thickness", "Natural, gradual-looking improvement"],
  },
  {
    num: "04",
    title: "Skin Boosters",
    sub: "Deep hydration · Texture · Skin quality",
    desc: "Skin booster injections deliver hyaluronic acid and regenerative compounds deep into the dermis, improving skin hydration, elasticity, and texture from within. Ideal for patients seeking improved overall skin quality without volume changes.",
    accent: "#d0c8a0",
    benefits: ["Improves deep skin hydration", "Enhances skin elasticity and firmness", "Smooths skin texture and fine lines", "Natural-looking glow and radiance", "Suitable for face, neck, and décolletage"],
  },
  {
    num: "05",
    title: "PRP & Exosomes",
    sub: "Regenerative repair · Collagen · Glow",
    desc: "Platelet-Rich Plasma (PRP) and exosome therapies use the body's own regenerative signals to stimulate collagen production, improve skin texture, and support tissue repair. Often combined with other treatments to enhance and extend results.",
    accent: "#c0a8c8",
    benefits: ["Stimulates natural collagen and elastin", "Improves skin texture, tone, and glow", "Supports post-treatment healing", "Enhances results of other esthetic treatments", "Natural regenerative approach"],
  },
];

const CONCERNS = [
  { title: "Wrinkles & Expression Lines", sub: "Crow's feet, forehead, frown lines" },
  { title: "Facial Volume Loss",           sub: "Cheeks, temples, under-eyes" },
  { title: "Lip Enhancement",              sub: "Shape, volume & definition" },
  { title: "Skin Quality",                 sub: "Texture, hydration & radiance" },
  { title: "Jawline & Chin",               sub: "Contour, definition & balance" },
  { title: "Hair Restoration",             sub: "Scalp PRP & exosome therapy" },
];

const REVIEWS = [
  { text: "I was nervous about trying cosmetic injections but the team made me feel completely at ease. The results are so natural — nobody knows I've had anything done, they just say I look refreshed.", name: "Marie-Claude", age: "42", concern: "Wrinkles, volume loss", product: "Neuromodulators + Fillers" },
  { text: "After years of struggling with hair thinning, the PRP treatments at CloudMed have made a real difference. My hair is noticeably thicker and I feel so much more confident.", name: "Jonathan", age: "38", concern: "Hair thinning", product: "PRP & Exosomes" },
  { text: "The skin booster treatment was exactly what my skin needed after a long winter. It looks plumper, more hydrated, and the texture has improved so much. I'll definitely be back.", name: "Sophie", age: "34", concern: "Dullness, dehydration", product: "Skin Boosters" },
];

const FAQS = [
  { q: "Are cosmetic injections safe?", a: "Yes, when performed by trained medical professionals. At CloudMed, all cosmetic injection treatments are supervised by Dr. Chugh and performed by our certified clinical team using Health Canada-approved products." },
  { q: "How long do results last?", a: "It depends on the treatment. Neuromodulators typically last 3–4 months. Dermal fillers last 9–18+ months depending on product and area. Collagen stimulators can last 2 years or more." },
  { q: "Is there downtime?", a: "Most injectable treatments have minimal to no downtime. Mild swelling, redness, or bruising can occur and typically resolves within 24–72 hours. Your provider will advise based on the treatment." },
  { q: "Do injections hurt?", a: "Discomfort is minimal. Most treatments use topical numbing cream before injection. Filler products also contain built-in anaesthetic. Most patients describe the sensation as a mild pinch." },
  { q: "How do I know which treatment is right for me?", a: "During your consultation, Dr. Chugh or our nurse will assess your facial anatomy, skin quality, and goals to recommend the most appropriate treatment plan — tailored specifically to you." },
  { q: "What products do you use?", a: "We use only Health Canada-approved products from trusted manufacturers. We never use grey-market or unregulated products. All product choices are discussed transparently during your consultation." },
];

const OTHER_SERVICES = [
  { name: "Vivier Skincare Boutique",            link: "/services/esthetic/vivier-skincare" },
  { name: "XERF™ Structural Skin Tightening",    link: "/services/esthetic/xerf-rf" },
  { name: "Venus Versa™ Multi-Treatment",         link: "/services/esthetic/venus-versa" },
  { name: "Advanced RF Skin Tightening",          link: "/services/esthetic/rf-skin-tightening" },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ci-faq-item ${open ? "ci-faq-item--open" : ""}`}>
      <button className="ci-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <Plus size={18} strokeWidth={1.8} className="ci-faq-icon" />
      </button>
      <div className="ci-faq-body"><p>{a}</p></div>
    </div>
  );
}

export default function CosmeticInjections() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <>
      <Navbar />
      <main className="ci-page">

        {/* HERO */}
        <section className="ci-hero">
          <div className="ci-hero-bg" />
          <div className="ci-hero-content">
            <p className="ci-eyebrow">Esthetic Medicine · CloudMed</p>
            <h1>Cosmetic Injections<br />&amp; Regenerative Care</h1>
            <p className="ci-hero-sub">Non-surgical facial rejuvenation, skin quality treatments, and hair restoration — guided by medical expertise and focused on natural, lasting results.</p>
            <div className="ci-hero-btns">
              <a href="#appointment" className="ci-btn-light">Book a Consultation</a>
              <a href="#treatments"  className="ci-btn-outline-white">View Treatments</a>
            </div>
          </div>
          <div className="ci-hero-deco ci-hero-deco--1" />
          <div className="ci-hero-deco ci-hero-deco--2" />
        </section>

        {/* TRUST BAR */}
        <div className="ci-trustbar">
          {["Non-Surgical Approach", "Natural-Looking Results", "Personalized Protocols", "Medical Supervision Always"].map((t, i, arr) => (
            <div key={t} className="ci-trustbar-group">
              <span>{t}</span>
              {i < arr.length - 1 && <span className="ci-trustbar-dot">·</span>}
            </div>
          ))}
        </div>

        {/* INTRO */}
        <section className="ci-intro">
          <div className="ci-intro-copy">
            <p className="ci-label">Natural Results Without Surgery</p>
            <h2>Restore. Refresh. Rejuvenate.</h2>
            <p>CloudMed's cosmetic injection and regenerative treatments are designed for patients who want visible improvement in facial appearance, skin quality, or hair health — without surgery, general anaesthesia, or extended recovery.</p>
            <p>Every treatment plan is personalized based on your anatomy, goals, and existing treatments. Our medical team ensures safety, precision, and natural-looking outcomes at every stage.</p>
            <a href="#appointment" className="ci-btn-dark">Book a Consultation</a>
          </div>
          <div className="ci-intro-visual">
            <div className="ci-intro-card ci-intro-card--1">
              <span className="ci-intro-card-label">Our Approach</span>
              <strong>Medical precision.<br />Natural results.</strong>
            </div>
            <div className="ci-intro-card ci-intro-card--2">
              <span className="ci-intro-card-label">Health Canada Approved</span>
              <strong>Only certified,<br />regulated products.</strong>
            </div>
            <div className="ci-intro-card ci-intro-card--3">
              <span className="ci-intro-card-label">Supervised Care</span>
              <strong>Dr. Chugh-supervised<br />at every step.</strong>
            </div>
          </div>
        </section>

        {/* CONCERNS */}
        <section className="ci-concerns">
          <div className="ci-section-head">
            <p className="ci-label">What We Treat</p>
            <h2>Solutions for every concern.</h2>
          </div>
          <div className="ci-concern-grid">
            {CONCERNS.map((c, i) => (
              <a href="#treatments" key={c.title} className="ci-concern-card">
                <span className="ci-concern-num">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{c.title}</h3><p>{c.sub}</p></div>
                <ArrowRight size={17} className="ci-concern-arrow" />
              </a>
            ))}
          </div>
        </section>

        {/* TREATMENT ROWS */}
        <section className="ci-treatments" id="treatments">
          <div className="ci-treatments-head">
            <p className="ci-label">Our Treatments</p>
            <h2>Every treatment. One medical team.</h2>
          </div>
          {TREATMENTS.map((t, i) => (
            <article key={t.title} className={`ci-row ${i % 2 !== 0 ? "ci-row--reverse" : ""}`}>
              <div className="ci-row-visual" style={{ background: `linear-gradient(135deg, ${t.accent}33, ${t.accent}11)` }}>
                <div className="ci-row-num-bg">{t.num}</div>
                <div className="ci-row-badge" style={{ background: t.accent }}>
                  <span>{t.title.split(" ")[0]}</span>
                </div>
              </div>
              <div className="ci-row-copy">
                <p className="ci-label">{t.sub}</p>
                <h2>{t.title}</h2>
                <p className="ci-row-desc">{t.desc}</p>
                <ul className="ci-benefit-list">
                  {t.benefits.map((b) => (
                    <li key={b}><Check size={14} />{b}</li>
                  ))}
                </ul>
                <a href="#appointment" className="ci-btn-dark">
                  Book {t.title} Consultation <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* WHY NON-SURGICAL */}
        <section className="ci-why">
          <div className="ci-why-head">
            <p className="ci-label ci-label--gold">Why Non-Surgical</p>
            <h2>The benefits of injectable treatments.</h2>
          </div>
          <div className="ci-why-grid">
            {[
              { n: "01", name: "No General Anaesthesia", desc: "Treatments require only topical or local anaesthesia — reducing risk, anxiety, and recovery time significantly." },
              { n: "02", name: "Immediate Results",      desc: "Most injectable treatments produce visible results the same day, with full results developing over the following days." },
              { n: "03", name: "Minimal Downtime",       desc: "Return to most normal activities the same day. Minor swelling or bruising typically resolves within 24–72 hours." },
              { n: "04", name: "Reversible",             desc: "Hyaluronic acid fillers can be dissolved if needed. Neuromodulators wear off naturally over months." },
              { n: "05", name: "Personalized",           desc: "Treatment plans are built around your anatomy and goals — not a one-size-fits-all approach." },
              { n: "06", name: "Medically Supervised",   desc: "All treatments at CloudMed are supervised by Dr. Chugh, ensuring safety, precision, and clinical oversight." },
            ].map((item) => (
              <div key={item.name} className="ci-why-card">
                <span className="ci-why-num">{item.n}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="ci-reviews">
          <div className="ci-reviews-head">
            <p className="ci-label">Patient Feedback</p>
            <h2>What our patients say.</h2>
          </div>
          <div className="ci-review-block">
            <div className="ci-review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c8a96b" color="#c8a96b" />)}
            </div>
            <blockquote className="ci-review-quote">"{REVIEWS[activeReview].text}"</blockquote>
            <div className="ci-review-meta">
              <strong>{REVIEWS[activeReview].name}</strong>
              <span> · {REVIEWS[activeReview].age} · {REVIEWS[activeReview].concern}</span>
              <em> · {REVIEWS[activeReview].product}</em>
            </div>
            <div className="ci-review-nav">
              <button onClick={() => setActiveReview((activeReview - 1 + REVIEWS.length) % REVIEWS.length)} aria-label="Previous"><ChevronLeft size={18} /></button>
              <div className="ci-review-dots">
                {REVIEWS.map((_, i) => (
                  <button key={i} className={`ci-dot ${i === activeReview ? "ci-dot--active" : ""}`} onClick={() => setActiveReview(i)} />
                ))}
              </div>
              <button onClick={() => setActiveReview((activeReview + 1) % REVIEWS.length)} aria-label="Next"><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ci-cta" id="appointment">
          <div className="ci-cta-inner">
            <p className="ci-label ci-label--gold">Ready to Begin?</p>
            <h2>Book your personalized consultation.</h2>
            <p>Our team will assess your facial anatomy, skin quality, and goals to recommend the most appropriate injectable treatment plan for you.</p>
            <ul className="ci-cta-list">
              {["Personalized consultation with Dr. Chugh or our nurse", "Full treatment plan tailored to your anatomy and goals", "Health Canada-approved products only", "Transparent pricing with no hidden fees"].map(b => (
                <li key={b}><Check size={14} />{b}</li>
              ))}
            </ul>
            <a href="#appointment" className="ci-btn-cream">Book Consultation</a>
          </div>
        </section>

        {/* FAQs */}
        <section className="ci-faqs">
          <div className="ci-faqs-inner">
            <div className="ci-faqs-left">
              <p className="ci-label ci-label--gold">FAQ</p>
              <h2>Common questions about cosmetic injections.</h2>
              <p className="ci-faqs-sub">Everything you need to know before your consultation.</p>
            </div>
            <div className="ci-faqs-list">
              {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        <ExploreServices services={OTHER_SERVICES} />

      </main>
      <Footer />
    </>
  );
}