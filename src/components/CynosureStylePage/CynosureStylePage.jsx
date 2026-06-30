import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Plus, Download, ArrowRight } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import ExploreServices from "../ExploreServices/ExploreServices";
import Footer from "../Footer/Footer";
import "./CynosureStylePage.css";

/* ─── Intersection-based fade-in ─────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Before / After Slider ──────────────────────────────────── */
function BeforeAfterSlider({ beforeSrc, afterSrc, caption, beforeAlt = "Before", afterAlt = "After" }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  const update = useCallback((clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const onMouseDown = (e) => { e.preventDefault(); setDragging(true); };
  const onMouseMove = useCallback((e) => { if (dragging) update(e.clientX); }, [dragging, update]);
  const onMouseUp = useCallback(() => setDragging(false), []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  return (
    <div className="csp-ba-wrap">
      <div
        className="csp-ba-slider"
        ref={ref}
        onMouseDown={onMouseDown}
        onTouchMove={(e) => update(e.touches[0].clientX)}
        onTouchStart={(e) => update(e.touches[0].clientX)}
      >
        {/* Before — full width base */}
        <div className="csp-ba-before">
          {beforeSrc
            ? <img src={beforeSrc} alt={beforeAlt} />
            : <div className="csp-ba-placeholder csp-ba-placeholder--before"><span>Before</span></div>}
        </div>

        {/* After — clipped */}
        <div className="csp-ba-after-clip" style={{ width: `${pos}%` }}>
          <div className="csp-ba-after">
            {afterSrc
              ? <img src={afterSrc} alt={afterAlt} />
              : <div className="csp-ba-placeholder csp-ba-placeholder--after"><span>After</span></div>}
          </div>
        </div>

        {/* Divider line + handle */}
        <div className="csp-ba-line" style={{ left: `${pos}%` }}>
          <button type="button" className="csp-ba-handle">
            <ChevronLeft size={14} />
            <ChevronRight size={14} />
          </button>
        </div>

        <span className="csp-ba-label csp-ba-label--before">Before</span>
        <span className="csp-ba-label csp-ba-label--after">After</span>
      </div>
      {caption && <p className="csp-ba-caption">{caption}</p>}
    </div>
  );
}

/* ─── FAQ Item ───────────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`csp-faq-item ${open ? "open" : ""}`}>
      <button className="csp-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <Plus className="csp-faq-icon" size={18} />
      </button>
      <div className="csp-faq-body">
        <p>{a}</p>
      </div>
    </div>
  );
}

/* ─── Embedded Video (wistia-style iframe OR local video) ────── */
function VideoEmbed({ src, poster, localSrc, localType = "video/mp4" }) {
  if (localSrc) {
    return (
      <div className="csp-video-wrap">
        <video
          className="csp-video"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={localSrc} type={localType} />
        </video>
      </div>
    );
  }
  if (src) {
    return (
      <div className="csp-video-wrap">
        <iframe
          src={src}
          className="csp-video"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          title="treatment video"
        />
      </div>
    );
  }
  return (
    <div className="csp-video-wrap csp-video-placeholder">
      <div className="csp-video-play-icon">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.12)" />
          <polygon points="24,18 46,30 24,42" fill="white" />
        </svg>
        <span>Treatment Video</span>
      </div>
    </div>
  );
}

/* ─── Main Template Component ────────────────────────────────── */
export default function CynosureStylePage({ data }) {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      <Navbar />
      <main className="csp-main">

        {/* ══════════════════════════════════════════════
            1. HERO — full screen, dark background
        ══════════════════════════════════════════════ */}
        <section className="csp-hero">
          {/* Background image or video */}
          {data.heroVideo ? (
            <video className="csp-hero-media" autoPlay muted loop playsInline>
              <source src={data.heroVideo} type={data.heroVideoType || "video/mp4"} />
            </video>
          ) : data.heroImage ? (
            <img className="csp-hero-media" src={data.heroImage} alt="" aria-hidden />
          ) : (
            <div className="csp-hero-gradient" />
          )}
          <div className="csp-hero-overlay" />

          <div className="csp-hero-inner">
            <div className="csp-hero-content">
              <span className="csp-eyebrow">{data.eyebrow}</span>
              <h1>{data.heroTitle}</h1>
              <p>{data.heroSubtitle}</p>
              <div className="csp-hero-btns">
                <a href="#appointment" className="csp-btn-primary">Book Consultation</a>
                <a href="#brochure"    className="csp-btn-outline">Download Brochure</a>
                <a href="#provider"    className="csp-btn-outline">Find a Provider</a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            2. INTRO TEXT BLOCK — white bg, centered large text
        ══════════════════════════════════════════════ */}
        <section className="csp-intro">
          <div className="csp-intro-inner">
            <FadeIn>
              <span className="csp-section-label">{data.introLabel}</span>
              <h2 className="csp-intro-heading">{data.introHeading}</h2>
              <p className="csp-intro-text">{data.introText}</p>
            </FadeIn>
            {data.awardBadge && (
              <FadeIn delay={150} className="csp-award-row">
                <div className="csp-award-badge">
                  <div className="csp-award-icon">★</div>
                  <span>{data.awardBadge}</span>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. RESULTS WITHOUT SACRIFICE
               Left: bullet list   Right: video embed
        ══════════════════════════════════════════════ */}
        <section className="csp-sacrifice">
          <div className="csp-sacrifice-inner">
            <FadeIn className="csp-sacrifice-copy">
              <span className="csp-section-label">{data.sacrificeLabel}</span>
              <h2>{data.sacrificeHeading}</h2>
              <ul className="csp-bullet-list">
                {data.sacrificeBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={120} className="csp-sacrifice-media">
              <VideoEmbed
                src={data.sacrificeVideoSrc}
                localSrc={data.sacrificeVideoLocal}
                localType={data.sacrificeVideoType}
                poster={data.sacrificeVideoPoster}
              />
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            4. HOW IT WORKS
               Full-width text block + video below
        ══════════════════════════════════════════════ */}
        <section className="csp-how">
          <div className="csp-how-inner">
            <FadeIn className="csp-how-copy">
              <span className="csp-section-label">{data.howLabel}</span>
              <h2>{data.howHeading}</h2>
              <div className="csp-how-body">
                {data.howParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100} className="csp-how-media">
              <VideoEmbed
                src={data.howVideoSrc}
                localSrc={data.howVideoLocal}
                localType={data.howVideoType}
                poster={data.howVideoPoster}
              />
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. PERSONALIZATION / UNIQUE SECTION
               Left: video   Right: text
        ══════════════════════════════════════════════ */}
        {data.uniqueHeading && (
          <section className="csp-unique">
            <div className="csp-unique-inner">
              <FadeIn className="csp-unique-media">
                <VideoEmbed
                  src={data.uniqueVideoSrc}
                  localSrc={data.uniqueVideoLocal}
                  localType={data.uniqueVideoType}
                  poster={data.uniqueVideoPoster}
                />
              </FadeIn>
              <FadeIn delay={120} className="csp-unique-copy">
                <span className="csp-section-label">{data.uniqueLabel}</span>
                <h2>{data.uniqueHeading}</h2>
                <p>{data.uniqueText}</p>
                {data.uniqueFeatures && (
                  <div className="csp-unique-features">
                    {data.uniqueFeatures.map((f) => (
                      <div className="csp-unique-feature" key={f.label}>
                        <strong>{f.label}</strong>
                        <span>{f.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════
            6. BEFORE & AFTER GALLERY
               Main large slider + thumbnail row
        ══════════════════════════════════════════════ */}
        {data.cases && data.cases.length > 0 && (
          <section className="csp-gallery">
            <FadeIn className="csp-gallery-heading">
              <span className="csp-section-label">{data.galleryLabel || "Before & After"}</span>
              <h2>{data.galleryHeading || "Real patient results."}</h2>
              <p className="csp-gallery-note">Drag the slider to compare. Results may vary by patient and treatment plan.</p>
            </FadeIn>

            {/* Main active slider */}
            <FadeIn delay={100}>
              <BeforeAfterSlider
                beforeSrc={data.cases[activeCase].beforeSrc}
                afterSrc={data.cases[activeCase].afterSrc}
                caption={data.cases[activeCase].caption}
              />
            </FadeIn>

            {/* Thumbnail row */}
            {data.cases.length > 1 && (
              <div className="csp-gallery-thumbs">
                {data.cases.map((c, i) => (
                  <button
                    key={i}
                    className={`csp-gallery-thumb ${activeCase === i ? "active" : ""}`}
                    onClick={() => setActiveCase(i)}
                    type="button"
                  >
                    <div className="csp-thumb-img">
                      {c.thumbSrc
                        ? <img src={c.thumbSrc} alt={`Case ${i + 1}`} />
                        : <span>{i + 1}</span>}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ══════════════════════════════════════════════
            7. QUOTE / DARK CTA BLOCK
        ══════════════════════════════════════════════ */}
        <section className="csp-quote-cta">
          <FadeIn>
            <blockquote>{data.quoteText}</blockquote>
            <div className="csp-quote-btns">
              <a href="#appointment" className="csp-btn-primary">Book Consultation</a>
              <a href="#brochure" className="csp-btn-outline-white">Download Brochure</a>
            </div>
          </FadeIn>
        </section>

        {/* ══════════════════════════════════════════════
            8. CLINICAL EVIDENCE
               Expandable cards with download buttons
        ══════════════════════════════════════════════ */}
        {data.evidence && data.evidence.length > 0 && (
          <section className="csp-evidence">
            <FadeIn>
              <span className="csp-section-label">{data.evidenceLabel || "Clinical Evidence"}</span>
              <h2>{data.evidenceHeading || "Backed by science."}</h2>
            </FadeIn>
            <div className="csp-evidence-list">
              {data.evidence.map((e, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="csp-evidence-card">
                    <div className="csp-evidence-card-body">
                      <p className="csp-evidence-title">{e.title}</p>
                      {e.authors && <p className="csp-evidence-meta">{e.authors}</p>}
                    </div>
                    {e.downloadHref && (
                      <a href={e.downloadHref} className="csp-evidence-download" target="_blank" rel="noreferrer">
                        <Download size={16} />
                        {e.downloadLabel || "Download Study"}
                      </a>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════
            9. FAQs — accordion
        ══════════════════════════════════════════════ */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="csp-faqs">
            <FadeIn>
              <span className="csp-section-label">FAQs</span>
              <h2>Frequently asked questions</h2>
            </FadeIn>
            <div className="csp-faq-list">
              {data.faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
            {data.legalNote && (
              <p className="csp-legal">{data.legalNote}</p>
            )}
          </section>
        )}

        {/* ══════════════════════════════════════════════
            10. EXPLORE OTHER SERVICES
        ══════════════════════════════════════════════ */}
        {data.otherServices && <ExploreServices services={data.otherServices} />}

      </main>
      <Footer />
    </>
  );
}
