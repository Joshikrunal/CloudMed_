import CynosureStylePage from "../../components/CynosureStylePage/CynosureStylePage";

// ── Local video assets ────────────────────────────────────────
import heroVideo    from "../../assets/videos/dermatology.mp4";
import howVideo     from "../../assets/videos/testing.mp4";
import uniqueVideo  from "../../assets/videos/Gynec.mp4";

const data = {

  /* ── Hero ─────────────────────────────────────────────────── */
  eyebrow:      "XERF™ · Structural Skin Tightening",
  heroTitle:    "Welcome to Structural Skin Tightening",
  heroSubtitle:
    "The next step in the evolution of skincare is here. Delivering all the skin tightening and collagen-boosting power of radiofrequency — with no numbing, needles, or downtime. Just visible results, backed by science.",
  heroVideo,
  heroVideoType: "video/mp4",

  /* ── Intro block ──────────────────────────────────────────── */
  introLabel:   "Structural Skin Tightening",
  introHeading: "The world's first multifrequency monopolar RF treatment.",
  introText:
    "Unlike conventional RF treatments, the XERF™ treatment delivers energy deeper into the skin — reaching the shallow, middle, and deep layers — where real change begins.",
  awardBadge:   "Harper's Bazaar Best of Beauty Award",

  /* ── Results without sacrifice ────────────────────────────── */
  sacrificeLabel:   "Results Without Sacrifice",
  sacrificeHeading: "Results without sacrifice.",
  sacrificeBullets: [
    "No numbing, no needles, and no downtime.",
    "True skin transformation at every level, delivering energy exactly where you need it most.",
    "Fully customizable treatments that adapt to each patient's unique skin profile.",
  ],
  sacrificeVideoLocal: howVideo,
  sacrificeVideoType:  "video/mp4",

  /* ── How it works ─────────────────────────────────────────── */
  howLabel:   "How It Works",
  howHeading: "How XERF Structural Skin Tightening works.",
  howParagraphs: [
    "The XERF system offers the world's first multifrequency monopolar RF treatment. By combining both 6.78 MHz and 2 MHz frequencies, XERF can deliver energy not just deeper, but exactly where you need it most, creating smoother and tighter skin.",
    "The XERF system leverages Wave Fit™ pulse and Advanced Integrated Cryogen Delivery cooling technology to control energy delivery while maintaining surface temperature, for a Never-Numb™ treatment. XERF sessions require a shorter room time vs. similar treatments that require numbing, potentially increasing the number of patients that can be treated per day.",
  ],
  howVideoLocal: uniqueVideo,
  howVideoType:  "video/mp4",

  /* ── Unique / Personalization ─────────────────────────────── */
  uniqueLabel:   "Personalized Treatment",
  uniqueHeading: "A treatment as unique as you are.",
  uniqueText:
    "No two individuals are alike, and their skin treatments shouldn't be either. The XERF system adapts to each patient's unique skin profile using Accurate Impedance Feedback for real-time analysis of the skin.",
  uniqueVideoLocal: heroVideo,
  uniqueVideoType:  "video/mp4",
  uniqueFeatures: [
    { label: "Wave Fit™ Pulse",                       desc: "Controls energy delivery in real time for consistent, comfortable results." },
    { label: "Advanced Integrated Cryogen Delivery",   desc: "Keeps surface skin cool while energy penetrates deeper tissue layers." },
    { label: "3 Depth Settings",                       desc: "Shallow, middle, and deep layer targeting in a single treatment session." },
    { label: "10 Intensity Levels",                    desc: "Fully personalized to every patient's unique skin profile and anatomy." },
  ],

  /* ── Before & After ───────────────────────────────────────── */
  galleryLabel:   "Before & After",
  galleryHeading: "Real patient results.",
  cases: [
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "Before and after 2 treatments. Courtesy of Dianne Quibell, MD",
      thumbSrc:  null,
    },
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "Before and after 4 weeks. Courtesy of Jordan Wang, MD, MBE, MBA",
      thumbSrc:  null,
    },
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "Before and after 2 treatments. Courtesy of Dianne Quibell, MD",
      thumbSrc:  null,
    },
  ],

  /* ── Quote CTA ────────────────────────────────────────────── */
  quoteText:
    "The XERF Structural Skin Tightening treatment delivers energy into each patient's skin exactly where they need it most. No needles, no numbing, and no downtime — just smoother and tighter skin, personalized for each patient.",

  /* ── Clinical Evidence ────────────────────────────────────── */
  evidenceLabel:   "Clinical Evidence",
  evidenceHeading: "Backed by peer-reviewed science.",
  evidence: [
    {
      title:         "Monopolar radiofrequency for dermal temperature regulation and remodeling: A porcine model study",
      authors:       "Journal of Cosmetic Dermatology, 2024 · Park et al.",
      downloadHref:  "#",
      downloadLabel: "Download Study",
    },
    {
      title:         "Efficacy of dual-frequency noninvasive monopolar radiofrequency in skin tightening",
      authors:       "Histological evidence — peer-reviewed article",
      downloadHref:  "#",
      downloadLabel: "Download Article",
    },
  ],

  /* ── FAQs ─────────────────────────────────────────────────── */
  faqs: [
    {
      q: "What internal temperatures are created by the XERF system, and how were they measured?",
      a: "In in-vivo studies, CloudMed measured internal skin temperatures of 50°C, 60°C, and 70°C using ultrasound-guided fiber-optic imaging. Following the XERF treatment, histological analysis confirmed collagen remodeling.",
    },
    {
      q: "How do you know XERF treatments strengthen collagen and tighten the skin?",
      a: "Histological evidence from in-vivo porcine studies shows increased thickening and tightening of collagen bundles at multiple tissue depths, along with an observable upward pull in the fascia.",
    },
    {
      q: "How do you know how deeply the XERF system delivers RF energy?",
      a: "Histological analysis from multiple clinical studies confirms the XERF system delivers RF energy to the SMAS (Superficial Musculoaponeurotic System) — a foundational tissue layer beneath the skin that plays a key role in lifting and tightening sagging skin.",
    },
    {
      q: "Is the XERF treatment painful?",
      a: "No numbing cream is required. XERF's Wave Fit™ pulse and Advanced Integrated Cryogen Delivery cooling technology maintain surface comfort throughout the entire session.",
    },
    {
      q: "How many XERF treatments are recommended?",
      a: "Most patients see optimal results after a series of sessions tailored by our clinical team during your consultation, based on your skin quality, anatomy, and goals.",
    },
  ],

  legalNote:
    "The XERF RF system is intended for use in dermatologic and general surgical procedures for electrocoagulation and hemostasis. All instances of the term skin tightening are used to describe tightening effects that occur via soft tissue coagulation.",

  /* ── Explore other services ───────────────────────────────── */
  otherServices: [
    { name: "Advanced RF Skin Tightening & Remodeling",  link: "/services/esthetic/rf-skin-tightening" },
    { name: "Venus Versa Multi-Treatment Platform",       link: "/services/esthetic/venus-versa" },
    { name: "Regenerative & Esthetic Treatments",         link: "/services/esthetic/regenerative" },
    { name: "Vivier Skincare Boutique",                   link: "/services/esthetic/vivier-skincare" },
  ],
};

export default function XerfRF() {
  return <CynosureStylePage data={data} />;
}
