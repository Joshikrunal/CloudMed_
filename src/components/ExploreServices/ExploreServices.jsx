import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./ExploreServices.css";

import imgFamilyMedicine from "../../assets/services/family-medicine.jpg";
import imgCardiology     from "../../assets/services/cardiology.jpg";
import imgDermatology    from "../../assets/services/dermatology.jpg";
import imgGynecology     from "../../assets/services/gynecology.jpg";
import imgSurgery        from "../../assets/services/surgery.jpg";
import imgEsthetic       from "../../assets/services/esthetic.jpg";
import imgNutrition      from "../../assets/services/nutrition.jpg";
import imgPsychology     from "../../assets/services/psychology.png";
import imgLabTesting     from "../../assets/services/lab-testing.jpg";
import imgNursing        from "../../assets/services/nursing.jpg";

const IMAGE_MAP = {
  "/services/family-medicine":              { img: imgFamilyMedicine, sub: "Primary care for all ages" },
  "/services/cardiology":                   { img: imgCardiology,     sub: "Heart health & diagnostics" },
  "/services/dermatology":                  { img: imgDermatology,    sub: "Skin, hair & nail care" },
  "/services/gynecology":                   { img: imgGynecology,     sub: "Women's health & fertility" },
  "/services/surgery":                      { img: imgSurgery,        sub: "Minimally invasive surgery" },
  "/services/esthetic":                     { img: imgEsthetic,       sub: "Advanced aesthetic medicine" },
  "/services/esthetic/xerf-rf":             { img: imgEsthetic,       sub: "Structural skin tightening" },
  "/services/esthetic/venus-versa":         { img: imgEsthetic,       sub: "IPL & multi-treatment" },
  "/services/esthetic/vivier-skincare":     { img: imgEsthetic,       sub: "Medical-grade skincare" },
  "/services/esthetic/cosmetic-injections": { img: imgEsthetic,       sub: "Injectables, PRP & exosomes" },
  "/services/esthetic/regenerative":        { img: imgEsthetic,       sub: "Injectables, PRP & exosomes" },
  "/services/nutrition":                    { img: imgNutrition,      sub: "Dietary guidance & wellness" },
  "/services/psychology":                   { img: imgPsychology,     sub: "Private therapy & support" },
  "/services/testing":                      { img: imgLabTesting,     sub: "Private lab results" },
  "/services/nursing":                      { img: imgNursing,        sub: "Vaccination & wound care" },
};

const FALLBACK = { img: imgEsthetic, sub: "CloudMed care" };

const CARD_W   = 280;
const CARD_GAP = 18;

export default function ExploreServices({ services = [] }) {
  const trackRef    = useRef(null);
  const [canPrev,   setCanPrev]   = useState(false);
  const [canNext,   setCanNext]   = useState(false);
  const [progress,  setProgress]  = useState(0);   // 0–1
  const [isDragging, setIsDragging] = useState(false);
  const dragStart   = useRef({ x: 0, scrollLeft: 0 });

  const checkBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    checkBounds();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkBounds, { passive: true });
    window.addEventListener("resize", checkBounds);
    return () => {
      el.removeEventListener("scroll", checkBounds);
      window.removeEventListener("resize", checkBounds);
    };
  }, [services, checkBounds]);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (CARD_W + CARD_GAP) * 2, behavior: "smooth" });
  };

  // Mouse drag to scroll
  const onMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(false);
    dragStart.current = { x: e.pageX, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";

    const onMove = (e) => {
      const dx = e.pageX - dragStart.current.x;
      if (Math.abs(dx) > 4) { setIsDragging(true); dragStart.current.moved = true; }
      el.scrollLeft = dragStart.current.scrollLeft - dx;
    };
    const onUp = () => {
      el.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      setTimeout(() => setIsDragging(false), 50);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <section className="es-section">

      {/* Header */}
      <div className="es-header">
        <SectionHeading
          kicker="Explore Other Services"
          title="Continue exploring CloudMed care."
        />
        <div className="es-controls">
          <button
            className={`es-arrow ${!canPrev ? "es-arrow--disabled" : ""}`}
            onClick={() => scroll(-1)}
            aria-label="Previous"
            disabled={!canPrev}
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <button
            className={`es-arrow ${!canNext ? "es-arrow--disabled" : ""}`}
            onClick={() => scroll(1)}
            aria-label="Next"
            disabled={!canNext}
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        className="es-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        style={{ cursor: "grab" }}
      >
        {services.map((service) => {
          const meta = IMAGE_MAP[service.link] || FALLBACK;
          return (
            <Link
              key={service.name}
              to={service.link}
              className="es-card"
              onClick={e => isDragging && e.preventDefault()}
              draggable={false}
            >
              {/* Image with navy overlay on hover */}
              <div className="es-card-img-wrap">
                <img src={meta.img} alt={service.name} className="es-card-img" draggable={false} />
                <div className="es-card-overlay" />
              </div>

              {/* Content */}
              <div className="es-card-body">
                <span className="es-card-sub">{meta.sub}</span>
                <h3 className="es-card-title">{service.name}</h3>
                <span className="es-card-cta">
                  Learn more <ArrowRight size={13} strokeWidth={2} />
                </span>
              </div>
            </Link>
          );
        })}

        {/* Trailing spacer so last card doesn't touch edge */}
        <div className="es-track-end" aria-hidden="true" />
      </div>

      {/* Progress bar */}
      <div className="es-progress-bar">
        <div
          className="es-progress-fill"
          style={{ width: `${Math.max(0, progress * 100)}%` }}
        />
      </div>

    </section>
  );
}
