import Navbar from "../../components/Navbar/Navbar";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import ConditionsSection from "../../components/ConditionsSection/ConditionsSection";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import TrustSection from "../../components/TrustSection/TrustSection";
import LocationsSection from "../../components/LocationsSection/LocationsSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";
import testingVideo from "../../assets/videos/testing.mp4";

const testCategories = [
  {
    title: "Allergy Testing",
    items: ["Animal & environmental panels", "Food & dairy panels", "Individual allergy tests", "Drug allergy testing", "Venoms and insects"],
  },
  {
    title: "Family Medicine Profiles",
    items: ["Standard health profile", "Liver function testing", "Mono screening", "Thyroid function tests", "STI screening", "Prenatal profile"],
  },
  {
    title: "Dermatology Profiles",
    items: ["Accutane monitoring", "Biology profile", "Standard profile", "Liver function tests", "GLP-1 / GIP monitoring", "Endocrinology profile"],
  },
  {
    title: "Gynecology Profiles",
    items: ["Female hormonal profile", "Discharge screening", "Androgen profile", "Tumor markers", "Fertility profile", "Prenatal testing"],
  },
  {
    title: "Cardiac Testing",
    items: ["24h blood pressure monitoring", "EKG with cardiologist interpretation", "Holter exams", "Apo B/A1", "NT-proBNP", "hs-CRP"],
  },
  {
    title: "Specialized Testing",
    items: ["Hematology", "Immunology", "Infectious disease", "Sexual health", "Stool testing", "Tumor and genetics", "Urine testing"],
  },
];

const otherServices = [
  { name: "Family Medicine, Pediatrics & Urgent Care", link: "/services/family-medicine" },
  { name: "Cardiology", link: "/services/cardiology" },
  { name: "Dermatology", link: "/services/dermatology" },
  { name: "Gynecology, Fertility & Menopause", link: "/services/gynecology" },
  { name: "Colon, Rectal & General Surgery", link: "/services/surgery" },
  { name: "Nursing Services", link: "/services/nursing" },
];

export default function LabTesting() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          kicker="Lab Testing & Diagnostic Services"
          title="Book your lab tests now."
          description="CloudMed offers comprehensive laboratory and diagnostic testing services at our clinics in Westmount and Griffintown, including blood tests, hormone panels, STI screening, routine health testing, and preventive care assessments."
          video={testingVideo}
        />
        <ConditionsSection title="Explore tests and diagnostic profiles." categories={testCategories} />
        <ExploreServices services={otherServices} />
        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}