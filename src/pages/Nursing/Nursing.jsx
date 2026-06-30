import Navbar from "../../components/Navbar/Navbar";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import ConditionsSection from "../../components/ConditionsSection/ConditionsSection";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import TrustSection from "../../components/TrustSection/TrustSection";
import LocationsSection from "../../components/LocationsSection/LocationsSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";
import homeVideo from "../../assets/videos/home page.webm";

const doctors = [
  {
    name: "Cristina Zop",
    location: "Griffintown",
    language: "French, English",
    bio: [
      "Cristina Zop studied at Dawson College in the Nursing program, then pursued a Bachelor of Science in Nursing at McGill University, graduating in 2019.",
      "She worked at the Jewish General Hospital for four years, gaining experience in the post-surgical unit and Neonatal Intensive Care Unit.",
      "Cristina later developed a strong passion for esthetic nursing and completed her esthetic certification with the Canadian Board of Esthetic Medicine in 2022.",
      "At CloudMed, she brings together clinical nursing and esthetic medicine to provide comprehensive, patient-centered care.",
    ],
  },
];

const services = [
  {
    title: "Vaccination",
    items: ["Routine vaccines", "Adult boosters", "Flu shots", "Travel vaccines", "Immunization record updates"],
  },
  {
    title: "Wound Care",
    items: ["Wound assessment", "Dressing changes", "Burns", "Post-surgical wounds", "Infection prevention"],
  },
  {
    title: "IV Hydration Therapy",
    items: ["Hydration support", "Fatigue support", "Migraine support", "Post-travel recovery", "Wellness optimization"],
  },
  {
    title: "Catheterization",
    items: ["Sterile catheterization", "Catheter replacement", "Maintenance", "Infection monitoring", "Patient education"],
  },
  {
    title: "Ear Cleaning",
    items: ["Ear irrigation", "Wax removal", "Ear canal assessment", "Pressure relief", "Preventive ear care"],
  },
  {
    title: "Home Nursing Services",
    items: ["Home visits", "Personalized care", "Clinical support", "Continuity of care", "Comfort-focused nursing"],
  },
];

const otherServices = [
  { name: "Family Medicine, Pediatrics & Urgent Care", link: "/services/family-medicine" },
  { name: "Cardiology", link: "/services/cardiology" },
  { name: "Dermatology", link: "/services/dermatology" },
  { name: "Gynecology, Fertility & Menopause", link: "/services/gynecology" },
  { name: "Dietician & Nutrition", link: "/services/nutrition" },
  { name: "Psychology", link: "/services/psychology" },
];

export default function Nursing() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          kicker="Nursing Services"
          title="Consult a Nursing Professional Now."
          description="CloudMed offers comprehensive nursing services including wound care, vaccinations, IV therapy, catheterization, and clinical support at our clinics in Westmount and Griffintown."
          video={homeVideo}
        />
        <DoctorsSection
          title="Licensed nursing care."
          description="Safe, professional care delivered by licensed nurses with coordinated physician follow-up when required."
          doctors={doctors}
        />
        <ConditionsSection title="Nursing services we provide." categories={services} />
        <ExploreServices services={otherServices} />
        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}