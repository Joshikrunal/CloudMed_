import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { X, Globe } from "lucide-react";

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
import cloudmedLogo      from "../../assets/Logo.PNG";

import "./MegaMenu.css";

/* ─────────────────────────────────────────────────────────────────
   GROUP 0 — FIXED cards (all 5 medical services always visible)
   Hovering any item in this group does NOT change the right panel.
   Each card links directly to its own page.
───────────────────────────────────────────────────────────────── */
const FIXED_CARDS = [
  { label: "Family Medicine",              img: imgFamilyMedicine, href: "/services/family-medicine" },
  { label: "Cardiology",                   img: imgCardiology,     href: "/services/cardiology" },
  { label: "Dermatology",                  img: imgDermatology,    href: "/services/dermatology" },
  { label: "Gynecology, Fertility & Menopause", img: imgGynecology, href: "/services/gynecology" },
  { label: "Colon, Rectal & General Surgery",   img: imgSurgery,   href: "/services/surgery" },
];

/* ─────────────────────────────────────────────────────────────────
   GROUPS — group 0 items have no cards (cards are fixed above)
   Groups 1–3 have hoverable items that change the right panel.
───────────────────────────────────────────────────────────────── */
const GROUPS = [
  {
    fixed: true,   // right panel is fixed for this entire group
    items: [
      { id: "family-medicine", label: "Family Medicine, Pediatrics & Urgent Care", link: "/services/family-medicine" },
      { id: "cardiology",      label: "Cardiology",                                link: "/services/cardiology" },
      { id: "dermatology",     label: "Dermatology",                               link: "/services/dermatology" },
      { id: "gynecology",      label: "Gynecology, Fertility & Menopause",         link: "/services/gynecology" },
      { id: "surgery",         label: "Colon, Rectal & General Surgery",           link: "/services/surgery" },
    ],
  },
  {
    fixed: false,
    items: [
      {
        id: "esthetic", label: "Esthetic Medicine", link: "/services/esthetic",
        cards: [
          { label: "XERF™ Structural Skin Tightening", img: imgEsthetic, href: "/services/esthetic/xerf-rf" },
          { label: "Venus Versa™ Multi-Treatment",     img: imgEsthetic, href: "/services/esthetic/venus-versa" },
          { label: "Vivier Skincare Boutique",         img: imgEsthetic, href: "/services/esthetic/vivier-skincare" },
          { label: "Cosmetic Injections & PRP",        img: imgEsthetic, href: "/services/esthetic/cosmetic-injections" },
        ],
      },
    ],
  },
  {
    fixed: false,
    items: [
      {
        id: "nutrition", label: "Nutrition", link: "/services/nutrition",
        cards: [
          { label: "Nutrition Consultation", img: imgNutrition, href: "/services/nutrition" },
          { label: "Metabolic Health",       img: imgNutrition, href: "/services/nutrition" },
          { label: "Women's Nutrition",      img: imgNutrition, href: "/services/nutrition" },
          { label: "Lifestyle Support",      img: imgNutrition, href: "/services/nutrition" },
        ],
      },
      {
        id: "psychology", label: "Psychology", link: "/services/psychology",
        cards: [
          { label: "Individual Therapy", img: imgPsychology, href: "/services/psychology" },
          { label: "Anxiety & Stress",   img: imgPsychology, href: "/services/psychology" },
          { label: "Mood Support",       img: imgPsychology, href: "/services/psychology" },
          { label: "Life Transitions",   img: imgPsychology, href: "/services/psychology" },
        ],
      },
    ],
  },
  {
    fixed: false,
    items: [
      {
        id: "testing", label: "Laboratory Testing Services", link: "/services/testing",
        cards: [
          { label: "Blood & Urine Tests", img: imgLabTesting, href: "/services/testing" },
          { label: "Allergy Testing",     img: imgLabTesting, href: "/services/testing" },
          { label: "DNA & Genetics",      img: imgLabTesting, href: "/services/testing" },
          { label: "Cardiac Testing",     img: imgLabTesting, href: "/services/testing" },
        ],
      },
      {
        id: "nursing", label: "Nursing Services", link: "/services/nursing",
        cards: [
          { label: "Vaccination",  img: imgNursing, href: "/services/nursing" },
          { label: "Wound Care",   img: imgNursing, href: "/services/nursing" },
          { label: "IV Hydration", img: imgNursing, href: "/services/nursing" },
          { label: "Home Nursing", img: imgNursing, href: "/services/nursing" },
        ],
      },
    ],
  },
];

// All non-fixed items (groups 1–3) for dynamic card switching
const DYNAMIC_ITEMS = GROUPS.filter(g => !g.fixed).flatMap(g => g.items);

// Default dynamic active = first non-fixed item
const DEFAULT_DYNAMIC_ID = DYNAMIC_ITEMS[0]?.id;

export default function MegaMenu({ isOpen, onClose }) {
  // null = showing fixed cards (group 0 hovered)
  // string = showing dynamic cards for that item id
  const [activeId, setActiveId] = useState(null);
  const [visible,  setVisible]  = useState(false);
  const [cardKey,  setCardKey]  = useState("fixed");

  useEffect(() => {
    if (isOpen) {
      setActiveId(null);      // start showing fixed cards
      setCardKey("fixed");
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  if (!isOpen) return null;

  const go = (href) => { onClose(); window.location.href = href; };

  // Determine what cards to show
  const isFixed = activeId === null;
  const dynamicActive = activeId
    ? DYNAMIC_ITEMS.find(i => i.id === activeId)
    : null;
  const displayCards = isFixed
    ? FIXED_CARDS
    : (dynamicActive?.cards || FIXED_CARDS);

  // When hovering a fixed-group item → show fixed cards
  const handleFixedHover = () => {
    if (activeId !== null) { setActiveId(null); setCardKey("fixed"); }
  };

  // When hovering a dynamic item → show its cards
  const handleDynamicHover = (item) => {
    if (activeId !== item.id) { setActiveId(item.id); setCardKey(item.id); }
  };

  let navIndex = 0;

  const menu = (
    <div
      className={`mm-backdrop ${visible ? "mm-backdrop--in" : ""}`}
      onClick={onClose}
    >
      <div
        className={`mm-panel ${visible ? "mm-panel--in" : ""}`}
        onClick={e => e.stopPropagation()}
      >
        {/* ── LEFT ────────────────────────────────── */}
        <div className="mm-left">
          <nav className="mm-nav">
            {GROUPS.map((group, gi) => (
              <div key={gi} className="mm-group">
                {group.items.map((item) => {
                  const idx = navIndex++;
                  const isActive = group.fixed
                    ? activeId === null          // whole fixed group highlighted when panel shows fixed
                    : activeId === item.id;

                  return (
                    <button
                      key={item.id}
                      className={`mm-item ${isActive ? "mm-item--active" : ""}`}
                      onMouseEnter={() =>
                        group.fixed ? handleFixedHover() : handleDynamicHover(item)
                      }
                      onClick={() => go(item.link)}
                      style={{
                        opacity:    visible ? 1 : 0,
                        transform:  visible ? "translateY(0)" : "translateY(12px)",
                        transition: `opacity 0.45s ease ${idx * 36}ms, transform 0.45s ease ${idx * 36}ms`,
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>

          <div className="mm-utils">
            <button className="mm-util" onClick={() => go("#appointment")}>Book an Appointment</button>
            <button className="mm-util" onClick={() => go("#locations")}>Find a Location</button>
          </div>

          <div className="mm-foot">
            <div className="mm-location">
              <Globe size={13} strokeWidth={1.5} />
              <span>Montreal, Canada</span>
            </div>
            <Link to="/" className="mm-logo-link" onClick={onClose}>
              <img src={cloudmedLogo} alt="CloudMed" className="mm-logo-img" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT ───────────────────────────────── */}
        <div className="mm-right">
          {/* Fixed group: 5-card layout (2+3 or custom grid) */}
          {isFixed ? (
            <div className="mm-grid mm-grid--fixed" key="fixed">
              {FIXED_CARDS.map((card, i) => (
                <button
                  key={card.label}
                  className="mm-card"
                  onClick={() => go(card.href)}
                  style={{
                    opacity:    visible ? 1 : 0,
                    transform:  visible ? "translateY(0)" : "translateY(14px)",
                    transition: `opacity 0.4s ease ${80 + i * 45}ms, transform 0.4s ease ${80 + i * 45}ms`,
                  }}
                >
                  <img src={card.img} alt={card.label} className="mm-card-img" />
                  <div className="mm-card-label"><span>{card.label}</span></div>
                </button>
              ))}
            </div>
          ) : (
            /* Dynamic groups: standard 2×2 grid */
            <div className="mm-grid" key={cardKey}>
              {displayCards.map((card, i) => (
                <button
                  key={card.label}
                  className="mm-card"
                  onClick={() => go(card.href)}
                  style={{
                    opacity:    visible ? 1 : 0,
                    transform:  visible ? "translateY(0)" : "translateY(14px)",
                    transition: `opacity 0.4s ease ${80 + i * 55}ms, transform 0.4s ease ${80 + i * 55}ms`,
                  }}
                >
                  <img src={card.img} alt={card.label} className="mm-card-img" />
                  <div className="mm-card-label"><span>{card.label}</span></div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <button className="mm-close" onClick={onClose} aria-label="Close menu">
        <X size={18} strokeWidth={1.5} />
      </button>
    </div>
  );

  return createPortal(menu, document.body);
}
