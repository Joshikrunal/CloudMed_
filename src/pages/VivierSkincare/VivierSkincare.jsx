import { useState } from "react";
import { ArrowRight, Check, Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Navbar          from "../../components/Navbar/Navbar";
import Footer          from "../../components/Footer/Footer";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import "./VivierSkincare.css";

const PRODUCTS = [
  { name: "Radiance Serum",                category: "Brightening · Antioxidant",   tag: "Best Seller",      accent: "#d4a96b" },
  { name: "C E Peptides",                  category: "Vitamin C · Peptides",         tag: "Most Loved",       accent: "#b8c9a0" },
  { name: "Serum 30",                      category: "Pigmentation · Vitamin C",     tag: "Award Winner",     accent: "#c8b4d0" },
  { name: "GrenzCine® Serum",              category: "Anti-Aging · Firming",         tag: "Clinic Favourite", accent: "#a0b8c8" },
  { name: "Daily Age-Defying Moisturizer", category: "Moisturizer · Daily Care",     tag: "",                 accent: "#c8c0a0" },
  { name: "Ultra Foaming Cleanser",        category: "Cleanser · Daily Care",        tag: "",                 accent: "#b0c8c0" },
];

const INGREDIENTS = [
  { name: "Vitamin C",               desc: "Brightening, antioxidant protection & collagen support" },
  { name: "Peptides",                desc: "Firming, elasticity & skin renewal signalling" },
  { name: "Retinol",                 desc: "Cell turnover, fine lines & texture refinement" },
  { name: "Hyaluronic Acid",         desc: "Deep hydration, barrier support & plumpness" },
  { name: "Polyamine Growth Factor", desc: "Cell regeneration & advanced anti-aging" },
  { name: "Antioxidants",            desc: "Environmental protection, glow & free radical defence" },
];

const CONCERNS = [
  { title: "Anti-Aging",     sub: "Fine lines, firmness & elasticity" },
  { title: "Pigmentation",   sub: "Dark spots, uneven tone & dullness" },
  { title: "Hydration",      sub: "Barrier support, comfort & glow" },
  { title: "Acne & Clarity", sub: "Oil balance, congestion & texture" },
];

const REVIEWS = [
  { text: "I've been using this since December and I love the way it makes my skin feel and look. It has lightened the dark spots on my face and makes my skin look healthier and brighter.", name: "Donna", age: "60+", concern: "Dark spots, dullness", product: "Radiance Serum" },
  { text: "I have tried every product on the market for my acne and this is the only one that actually works. It has drastically reduced my breakouts and doesn't dry my skin out like other treatments.", name: "Augusta", age: "25–39", concern: "Acne, redness", product: "C E Peptides" },
  { text: "I have sensitive skin and have tried retinol products in the past that made me break out, but this one caused no irritation. The slow-release formula feels comfortable.", name: "Nicole", age: "25–39", concern: "Sensitivity, fine lines", product: "GrenzCine® Serum" },
];

const FAQS = [
  { q: "What is Vivier Skincare?", a: "Vivier is a Canadian pharmaceutical-grade skincare brand that develops clinically proven formulas. It is available exclusively through medical clinics and skincare professionals." },
  { q: "Do I need a consultation to purchase Vivier products?", a: "Yes. At CloudMed, we recommend a brief skin assessment to match you with the right Vivier products for your concerns and existing treatments." },
  { q: "Can Vivier be used alongside other treatments?", a: "Absolutely. Vivier is designed to complement in-clinic treatments such as RF skin tightening, injectables, and laser procedures to extend and support your results." },
  { q: "How is Vivier different from over-the-counter skincare?", a: "Vivier uses pharmaceutical-grade concentrations of active ingredients — such as stabilized Vitamin C, retinol, and peptides — that are clinically proven to deliver visible results." },
  { q: "Is Vivier suitable for sensitive skin?", a: "Many Vivier products are formulated with sensitive skin in mind. During your consultation our team will recommend the right products and introduce them at the right pace for your skin." },
];

const OTHER_SERVICES = [
  { name: "Cosmetic Injections & PRP",        link: "/services/esthetic/cosmetic-injections" },
  { name: "XERF™ Structural Skin Tightening", link: "/services/esthetic/xerf-rf" },
  { name: "Venus Versa™ Multi-Treatment",      link: "/services/esthetic/venus-versa" },
  { name: "Advanced RF Skin Tightening",       link: "/services/esthetic/rf-skin-tightening" },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`vs-faq-item ${open ? "vs-faq-item--open" : ""}`}>
      <button className="vs-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <Plus size={18} strokeWidth={1.8} className="vs-faq-icon" />
      </button>
      <div className="vs-faq-body"><p>{a}</p></div>
    </div>
  );
}

export default function VivierSkincare() {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <>
      <Navbar />
      <main className="vs-page">

        <section className="vs-hero">
          <div className="vs-hero-bg" />
          <div className="vs-hero-content">
            <p className="vs-eyebrow">Vivier Skincare Boutique · CloudMed</p>
            <h1>Pharmaceutical-grade<br />skincare. Visible results.</h1>
            <p className="vs-hero-sub">Personalized medical-grade skincare protocols, available exclusively through CloudMed at our Griffintown clinic.</p>
            <div className="vs-hero-btns">
              <a href="#appointment" className="vs-btn-light">Book a Skin Assessment</a>
              <a href="#products"    className="vs-btn-outline-white">Explore Products</a>
            </div>
          </div>
          <div className="vs-hero-deco vs-hero-deco--1" />
          <div className="vs-hero-deco vs-hero-deco--2" />
          <div className="vs-hero-deco vs-hero-deco--3" />
        </section>

        <div className="vs-trustbar">
          {["Pharmaceutical-Grade Formulas", "Developed & Formulated in Canada", "Clinic-Exclusive · CloudMed Only", "25+ Years of Skincare Science"].map((t, i, arr) => (
            <div key={t} className="vs-trustbar-group">
              <span>{t}</span>
              {i < arr.length - 1 && <span className="vs-trustbar-dot">·</span>}
            </div>
          ))}
        </div>

        <section className="vs-intro">
          <div className="vs-intro-copy">
            <p className="vs-label">The Science of Clinical Skincare</p>
            <h2>Where medical science meets daily skincare.</h2>
            <p>Vivier bridges the gap between in-clinic treatments and your daily home routine. Using pharmaceutical-grade concentrations of active ingredients — Vitamin C, retinol, peptides, and growth factors — Vivier formulas deliver results that over-the-counter products cannot match.</p>
            <p>At CloudMed, our team assesses your skin, treatment history, and goals to build a personalized Vivier protocol that extends your in-clinic results and supports long-term skin health.</p>
            <a href="#appointment" className="vs-btn-dark">Book a Skin Assessment</a>
          </div>
          <div className="vs-intro-visual">
            <div className="vs-intro-card vs-intro-card--1">
              <span className="vs-intro-card-label">Clinic-Exclusive</span>
              <strong>Available exclusively<br />through CloudMed</strong>
            </div>
            <div className="vs-intro-card vs-intro-card--2">
              <span className="vs-intro-card-label">Proven Science</span>
              <strong>25+ years of<br />skincare innovation</strong>
            </div>
            <div className="vs-intro-card vs-intro-card--3">
              <span className="vs-intro-card-label">Personalized</span>
              <strong>Every protocol<br />built for your skin</strong>
            </div>
          </div>
        </section>

        <section className="vs-concerns">
          <div className="vs-section-head">
            <p className="vs-label">Shop by Concern</p>
            <h2>Your skin. Your protocol.</h2>
          </div>
          <div className="vs-concern-grid">
            {CONCERNS.map((c, i) => (
              <a href="#appointment" key={c.title} className="vs-concern-card">
                <span className="vs-concern-num">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{c.title}</h3><p>{c.sub}</p></div>
                <ArrowRight size={17} className="vs-concern-arrow" />
              </a>
            ))}
          </div>
        </section>

        <section className="vs-products" id="products">
          <div className="vs-section-head">
            <p className="vs-label">Featured Collection</p>
            <h2>Most trusted formulas at CloudMed.</h2>
            <p className="vs-section-sub">Product selection is personalized after a skin assessment. These are the formulas our patients ask about most.</p>
          </div>
          <div className="vs-product-grid">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="vs-product-card">
                <div className="vs-product-visual" style={{ background: `linear-gradient(135deg, ${p.accent}55, ${p.accent}22)` }}>
                  <div className="vs-product-bottle" style={{ background: p.accent }}>
                    <span>V</span>
                  </div>
                  {p.tag && <span className="vs-product-tag">{p.tag}</span>}
                </div>
                <div className="vs-product-body">
                  <span className="vs-product-cat">{p.category}</span>
                  <h3 className="vs-product-name">{p.name}</h3>
                  <a href="#appointment" className="vs-product-cta">Enquire <ArrowRight size={13} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="vs-ingredients">
          <div className="vs-ing-head">
            <p className="vs-label vs-label--gold">Active Ingredients</p>
            <h2>Powered by clinical skincare science.</h2>
          </div>
          <div className="vs-ing-grid">
            {INGREDIENTS.map((ing, i) => (
              <div key={ing.name} className="vs-ing-card">
                <span className="vs-ing-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{ing.name}</h3>
                <p>{ing.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="vs-reviews">
          <div className="vs-reviews-head">
            <p className="vs-label">Patient Reviews</p>
            <h2>Trusted by those who expect results.</h2>
          </div>
          <div className="vs-review-block">
            <div className="vs-review-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#c8a96b" color="#c8a96b" />)}
            </div>
            <blockquote className="vs-review-quote">"{REVIEWS[activeReview].text}"</blockquote>
            <div className="vs-review-meta">
              <strong>{REVIEWS[activeReview].name}</strong>
              <span> · {REVIEWS[activeReview].age} · {REVIEWS[activeReview].concern}</span>
              <em> · {REVIEWS[activeReview].product}</em>
            </div>
            <div className="vs-review-nav">
              <button onClick={() => setActiveReview((activeReview - 1 + REVIEWS.length) % REVIEWS.length)}><ChevronLeft size={18} /></button>
              <div className="vs-review-dots">
                {REVIEWS.map((_, i) => (
                  <button key={i} className={`vs-dot ${i === activeReview ? "vs-dot--active" : ""}`} onClick={() => setActiveReview(i)} />
                ))}
              </div>
              <button onClick={() => setActiveReview((activeReview + 1) % REVIEWS.length)}><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        <section className="vs-cta" id="appointment">
          <div className="vs-cta-inner">
            <p className="vs-label vs-label--gold">CloudMed + Vivier</p>
            <h2>Extend your in-clinic results at home.</h2>
            <p>At CloudMed, Vivier is integrated into personalized protocols to support treatment results, improve long-term skin quality, and maintain professional outcomes between visits.</p>
            <ul className="vs-cta-list">
              {["Extend results from injectables and laser treatments", "Improve long-term skin quality and tone", "Maintain professional treatment outcomes at home", "Support ongoing skin regeneration"].map(b => (
                <li key={b}><Check size={14} />{b}</li>
              ))}
            </ul>
            <a href="#appointment" className="vs-btn-cream">Book Skincare Consultation</a>
          </div>
        </section>

        <section className="vs-faqs">
          <div className="vs-faqs-inner">
            <div className="vs-faqs-left">
              <p className="vs-label">FAQ</p>
              <h2>Common questions about Vivier Skincare.</h2>
              <p className="vs-faqs-sub">Everything you need to know before your skin assessment.</p>
            </div>
            <div className="vs-faqs-list">
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