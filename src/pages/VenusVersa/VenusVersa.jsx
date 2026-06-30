import CynosureStylePage from "../../components/CynosureStylePage/CynosureStylePage";

// ── Local video assets ────────────────────────────────────────
import heroVideo   from "../../assets/videos/surgery.webm";
import howVideo    from "../../assets/videos/Gynec.mp4";
import uniqueVideo from "../../assets/videos/testing.mp4";

const data = {

  /* ── Hero ─────────────────────────────────────────────────── */
  eyebrow:      "Venus Versa™ · Multi-Treatment Platform",
  heroTitle:    "One platform. Every skin concern.",
  heroSubtitle:
    "Venus Versa combines IPL, NanoFractional RF, and MP² technology to address photorejuvenation, resurfacing, skin tightening, acne care, hair removal, and body contouring — all in a single, medically guided system.",
  heroVideo,
  heroVideoType: "video/webm",

  /* ── Intro block ──────────────────────────────────────────── */
  introLabel:   "Advanced Multi-Treatment Care",
  introHeading: "Multiple technologies. One treatment session.",
  introText:
    "Venus Versa is an advanced aesthetic platform engineered to address a broad spectrum of skin and body concerns. Unlike single-technology devices, it allows your provider to combine or switch modalities for a truly personalized treatment plan.",

  /* ── Results without sacrifice ────────────────────────────── */
  sacrificeLabel:   "Why Venus Versa",
  sacrificeHeading: "Comprehensive results, one platform.",
  sacrificeBullets: [
    "IPL photorejuvenation for pigment, redness, and sun damage correction.",
    "NanoFractional RF resurfacing to improve skin texture, tone, and fine lines.",
    "MP² multi-polar RF for skin tightening, cellulite reduction, and body contouring.",
    "Non-invasive treatment with minimal downtime and medically supervised protocols.",
  ],
  sacrificeVideoLocal: howVideo,
  sacrificeVideoType:  "video/mp4",

  /* ── How it works ─────────────────────────────────────────── */
  howLabel:   "How It Works",
  howHeading: "Three advanced technologies. One treatment system.",
  howParagraphs: [
    "Venus Versa uses IPL to target melanin and haemoglobin in the skin, breaking down pigmentation and vascular lesions while stimulating collagen — effective for sun damage, rosacea, and uneven tone.",
    "NanoFractional RF creates micro-channels through tiny pins to deliver RF energy and trigger an accelerated healing response, making it highly effective for resurfacing, scar reduction, and texture improvement.",
    "The MP² applicator combines multi-polar radiofrequency with pulsed magnetic fields to heat tissue uniformly, tighten skin, and support non-invasive body contouring — all with minimal to no downtime.",
  ],
  howVideoLocal: uniqueVideo,
  howVideoType:  "video/mp4",

  /* ── Unique / Personalization ─────────────────────────────── */
  uniqueLabel:   "Personalized Treatment",
  uniqueHeading: "A treatment plan built around your goals.",
  uniqueText:
    "No two patients have identical skin concerns, which is why Venus Versa offers multiple applicators that can be combined or rotated session to session. Your CloudMed provider will design a protocol tailored to your skin type, anatomy, and aesthetic goals.",
  uniqueVideoLocal: heroVideo,
  uniqueVideoType:  "video/webm",
  uniqueFeatures: [
    { label: "IPL Photorejuvenation",     desc: "Targets pigmentation, sun damage, and vascular lesions with broad-spectrum light." },
    { label: "NanoFractional RF",          desc: "Micro-channel resurfacing for skin texture, scars, and tone improvement." },
    { label: "MP² Body & Face Tightening", desc: "Uniform tissue heating for skin laxity and non-invasive body contouring." },
    { label: "Combination Protocols",      desc: "Multiple modalities in one visit for comprehensive, accelerated results." },
  ],

  /* ── Before & After ───────────────────────────────────────── */
  galleryLabel:   "Before & After",
  galleryHeading: "Real patient results.",
  cases: [
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "Photorejuvenation — before and after 4 IPL sessions.",
      thumbSrc:  null,
    },
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "NanoFractional RF — before and after 3 resurfacing sessions.",
      thumbSrc:  null,
    },
    {
      beforeSrc: null,
      afterSrc:  null,
      caption:   "Skin tightening with MP² — before and after 6 sessions.",
      thumbSrc:  null,
    },
  ],

  /* ── Quote CTA ────────────────────────────────────────────── */
  quoteText:
    "Venus Versa delivers advanced IPL, NanoFractional RF, and MP² treatments in a single medically supervised session — addressing photorejuvenation, resurfacing, skin tightening, and body contouring, personalized for every patient.",

  /* ── Clinical Evidence ────────────────────────────────────── */
  evidenceLabel:   "Clinical Evidence",
  evidenceHeading: "Supported by clinical data.",
  evidence: [
    {
      title:         "Safety and efficacy of non-ablative radiofrequency for skin tightening and rejuvenation",
      authors:       "Journal of Cosmetic and Laser Therapy — peer-reviewed clinical study",
      downloadHref:  "#",
      downloadLabel: "Download Study",
    },
    {
      title:         "Intense pulsed light for the treatment of photodamage and dyschromia",
      authors:       "Dermatologic Surgery — clinical evidence review",
      downloadHref:  "#",
      downloadLabel: "Download Article",
    },
  ],

  /* ── FAQs ─────────────────────────────────────────────────── */
  faqs: [
    {
      q: "What skin concerns can Venus Versa treat?",
      a: "Venus Versa addresses pigmentation, sun damage, redness, acne, fine lines, skin laxity, scarring, unwanted hair, cellulite, and non-invasive body contouring — all in one platform.",
    },
    {
      q: "How does IPL photorejuvenation work?",
      a: "IPL uses broad-spectrum light to target melanin and haemoglobin in the skin, breaking down pigmentation and vascular lesions while stimulating collagen. It is effective for sun damage, rosacea, and uneven skin tone.",
    },
    {
      q: "What is NanoFractional RF and how is it different from regular RF?",
      a: "NanoFractional RF uses a matrix of tiny pins to deliver RF energy through micro-channels in the skin surface. This triggers an accelerated healing response, making it more effective for resurfacing, scar reduction, and texture improvement than standard RF alone.",
    },
    {
      q: "Is Venus Versa treatment painful?",
      a: "Most Venus Versa treatments are well-tolerated. IPL and MP² sessions feel like a warm snap or mild heat, while NanoFractional RF may require a topical numbing cream for comfort. Your provider will advise based on the selected applicator.",
    },
    {
      q: "How many treatments are needed?",
      a: "Protocols vary by concern and treatment mode. Most patients see optimal results after 4 to 6 sessions, spaced a few weeks apart, followed by periodic maintenance.",
    },
    {
      q: "Is there downtime after Venus Versa?",
      a: "Downtime depends on the applicator used. IPL and MP² typically involve little to no downtime. NanoFractional RF may cause 1–3 days of redness and mild swelling as the skin heals.",
    },
  ],

  legalNote:
    "Venus Versa is a Health Canada and FDA-cleared multi-application aesthetic device. Treatments are performed by qualified healthcare professionals. Individual results may vary. Consult your CloudMed provider to determine the appropriate treatment protocol for your skin concerns.",

  /* ── Explore other services ───────────────────────────────── */
  otherServices: [
    { name: "XERF™ Structural Skin Tightening",          link: "/services/esthetic/xerf-rf" },
    { name: "Advanced RF Skin Tightening & Remodeling",  link: "/services/esthetic/rf-skin-tightening" },
    { name: "Regenerative & Esthetic Treatments",         link: "/services/esthetic/regenerative" },
    { name: "Vivier Skincare Boutique",                   link: "/services/esthetic/vivier-skincare" },
  ],
};

export default function VenusVersa() {
  return <CynosureStylePage data={data} />;
}
