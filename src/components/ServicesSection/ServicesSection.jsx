import {
  HeartPulse,
  FlaskConical,
  Sparkles,
  Stethoscope,
  UsersRound,
  Brain,
  Apple,
  Baby,
  Activity,
  Scissors,
  ArrowRight,
} from "lucide-react";

import "./ServicesSection.css";

import familyImg from "../../assets/services/family-medicine.jpg";
import cardioImg from "../../assets/services/cardiology.jpg";
import surgeryImg from "../../assets/services/surgery.jpg";
import dermatologyImg from "../../assets/services/dermatology.jpg";
import gynecologyImg from "../../assets/services/gynecology.jpg";
import labImg from "../../assets/services/lab-testing.jpg";
import nursingImg from "../../assets/services/nursing.jpg";
import estheticImg from "../../assets/services/esthetic.jpg";
import nutritionImg from "../../assets/services/nutrition.jpg";
import psychologyImg from "../../assets/services/psychology.png";

const services = [
  {
    title: "Family Medicine",
    subtitle: "Primary care for you and your family.",
    icon: UsersRound,
    image: familyImg,
    link: "/services/family-medicine",
  },
  {
    title: "Cardiology",
    subtitle: "Heart screening and specialist care.",
    icon: HeartPulse,
    image: cardioImg,
    link: "/services/cardiology",
  },
  {
    title: "Surgery",
    subtitle: "Colon, rectal and general surgery care.",
    icon: Scissors,
    image: surgeryImg,
    link: "/services/surgery",
  },
  {
    title: "Dermatology",
    subtitle: "Skin, hair and medical dermatology support.",
    icon: Activity,
    image: dermatologyImg,
    link: "/services/dermatology",
  },
  {
    title: "Gynecology",
    subtitle: "Fertility, menopause and women’s health.",
    icon: Baby,
    image: gynecologyImg,
    link: "/services/gynecology",
  },
  {
    title: "Laboratory Testing",
    subtitle: "Advanced testing and accurate results.",
    icon: FlaskConical,
    image: labImg,
    link: "/services/testing",
  },
  {
    title: "Nursing Services",
    subtitle: "Vaccination, wound care and IV hydration.",
    icon: Stethoscope,
    image: nursingImg,
    link: "/services/nursing",
  },
  {
    title: "Esthetic Medicine",
    subtitle: "Modern treatments for natural results.",
    icon: Sparkles,
    image: estheticImg,
    link: "/services/esthetic",
  },
  {
    title: "Nutrition",
    subtitle: "Personalized wellness and lifestyle support.",
    icon: Apple,
    image: nutritionImg,
    link: "/services/nutrition",
  },
  {
    title: "Psychology",
    subtitle: "Confidential mental health support.",
    icon: Brain,
    image: psychologyImg,
    link: "/services/psychology",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span>Comprehensive Healthcare</span>
        <div className="services-orange-line"></div>

        <h2>Explore Our Services</h2>

        <p>
          From family medicine and diagnostics to wellness, aesthetics and
          specialized care.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a href={service.link} className="service-card"
            aria-label={`Learn about ${service.title} services`} key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-icon-bubble" aria-hidden="true">
                <Icon size={34} strokeWidth={1.6} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <div className="service-small-line"></div>
                <p>{service.subtitle}</p>

                <div className="service-arrow">
                  Learn More <ArrowRight size={20} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}