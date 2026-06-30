import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  UserRoundCheck,
  Syringe,
  Waves,
  Flower2,
  WandSparkles,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import TrustSection from "../../components/TrustSection/TrustSection";
import LocationsSection from "../../components/LocationsSection/LocationsSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";
import dermatologyVideo from "../../assets/videos/dermatology.mp4";

import "./EstheticMedicine.css";

const doctors = [
  {
    name: "Dr. R. Chugh",
    location: "Westmount, Griffintown",
    language: "French, English and Hindi",
    specialty: "Medical Director · Esthetic Medicine",
    shortBio:
      "Dr. Rishi Chugh oversees CloudMed’s aesthetic medicine services, including RF devices, injectables, microneedling, PRP, exosomes, and hair restoration.",
    bio: [
      "Dr. Rishi Chugh is the Medical Director of Clinique CloudMed and has been in clinical practice since 2014.",
      "He has completed advanced training in cosmetic and aesthetic medicine and oversees CloudMed’s aesthetic medicine services.",
      "These services include radiofrequency and IPL devices, cosmetic injectables, microneedling, PRP, exosome therapies, and hair restoration treatments.",
    ],
  },
  {
    name: "Cristina Zop",
    location: "Griffintown",
    language: "French, English",
    specialty: "Nurse · Esthetic Medicine",
    shortBio:
      "Cristina Zop combines clinical nursing experience and esthetic medicine to support safe, natural, and personalized results.",
    bio: [
      "Cristina Zop is a nurse with clinical experience in post-surgical care, NICU care, and esthetic nursing.",
      "She completed esthetic certification with the Canadian Board of Esthetic Medicine in 2022.",
      "At CloudMed, she combines clinical nursing and esthetic medicine to support health, confidence, and natural results.",
    ],
  },
];

const estheticCards = [
  {
    title: "Cosmetic Injections",
    link: "/services/esthetic/cosmetic-injections",
    button: "Explore Injections",
    icon: Syringe,
    points: [
      "Neuromodulators",
      "Dermal fillers",
      "Skin boosters",
      "Collagen stimulators",
      "PRF NaturaGel",
      "Natural facial balancing",
    ],
  },
  {
    title: "XERF RF",
    link: "/services/esthetic/xerf-rf",
    button: "Discover XERF RF",
    icon: Waves,
    points: [
      "Advanced RF skin tightening",
      "Collagen remodeling",
      "Improves skin laxity",
      "Facial firming",
      "Non-surgical treatment",
      "Minimal downtime",
    ],
  },
  {
    title: "Venus Versa",
    link: "/services/esthetic/venus-versa",
    button: "Explore Venus Versa",
    icon: WandSparkles,
    points: [
      "IPL photorejuvenation",
      "Skin resurfacing",
      "Acne treatment support",
      "Hair removal",
      "Skin tightening",
      "Body contouring support",
    ],
  },
  {
    title: "Vivier Skincare Boutique",
    link: "/services/esthetic/vivier-skincare",
    button: "Explore Vivier",
    icon: Flower2,
    points: [
      "Medical-grade skincare",
      "Anti-aging support",
      "Pigmentation care",
      "Hydration and barrier repair",
      "Acne and clarity support",
      "Personalized skincare plans",
    ],
  },
];

const highlights = [
  {
    icon: UserRoundCheck,
    title: "Medical Expertise",
    text: "Physician-led care with advanced training.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Effective",
    text: "Evidence-based treatments with proven results.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    text: "Enhance your features without overcorrection.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Tailored plans for your unique skin goals.",
  },
];

export default function EstheticMedicine() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          kicker="Esthetic Medicine"
          title="Consult an Esthetic Medicine Expert now."
          description="CloudMed provides advanced esthetic medicine focused on skin rejuvenation, facial balancing, body contouring, hair restoration, and overall skin health."
          video={dermatologyVideo}
        />

        <DoctorsSection
          title="Medically guided aesthetic care."
          description="Personalized treatments designed to enhance natural results, stimulate collagen, and improve skin quality using advanced technologies and regenerative therapies."
          doctors={doctors}
        />

        <section className="esthetic-services-section">
          <div className="esthetic-bg-art">
            <div className="esthetic-circle"></div>
            <div className="esthetic-line-face"></div>
          </div>

          <div className="esthetic-header">
            <span>Our Services</span>
            <h2>Our esthetic medicine services.</h2>
            <div className="esthetic-orange-line"></div>
            <p>
              Advanced treatments. Natural results. Medical expertise. Explore
              our esthetic medicine services designed to enhance, restore, and
              maintain your natural beauty.
            </p>
          </div>

          <div className="esthetic-card-grid">
            {estheticCards.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  to={service.link}
                  className={`esthetic-service-card esthetic-card-${index + 1}`}
                  key={service.title}
                >
                  <div className="esthetic-card-top">
                    <div className="esthetic-pattern">
                      <div className="esthetic-icon-badge">
                        <Icon size={36} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="esthetic-card-content">
                    <h3>{service.title}</h3>
                    <div className="esthetic-small-line"></div>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <Check size={15} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="esthetic-card-btn">
                      {service.button}
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="esthetic-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="esthetic-highlight-item" key={item.title}>
                  <Icon size={42} strokeWidth={1.45} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}