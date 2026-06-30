import Navbar from "../../components/Navbar/Navbar";
import ServiceHero from "../../components/ServiceHero/ServiceHero";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import PricingSection from "../../components/PricingSection/PricingSection";
import ConditionsSection from "../../components/ConditionsSection/ConditionsSection";
import ExploreServices from "../../components/ExploreServices/ExploreServices";
import TrustSection from "../../components/TrustSection/TrustSection";
import LocationsSection from "../../components/LocationsSection/LocationsSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";
import testingVideo from "../../assets/videos/testing.mp4";

const doctors = [
  {
    name: "Dr. S. Portnoy",
    location: "Westmount",
    language: "French, English",
    bio: [
      "Dr. Shoshana Gal Portnoy is a Montreal-based cardiologist offering comprehensive, high-quality care across the full spectrum of cardiovascular disease.",
      "She completed her Internal Medicine training at the University of Toronto and her Cardiology training at McGill University and has been a Fellow of the Royal College of Physicians and Surgeons of Canada since 2015.",
      "With over a decade of experience in both hospital and outpatient settings, Dr. Gal Portnoy provides expert evaluation and management of coronary artery disease, heart failure, arrhythmias, valvular disease, hypertension, dyslipidemia, and cardiomyopathies.",
      "Her practice emphasizes timely access, thorough assessment, continuity of care, evidence-based medicine, advanced diagnostics, risk assessment, and lifestyle optimization.",
    ],
  },
];

const pricing = [
  {
    title: "Consultations",
    items: [
      { name: "Consultation (Clinic, Virtual)", price: "$550" },
      { name: "Follow-up Consultation (Clinic, Phone)", price: "$290" },
    ],
  },
  {
    title: "Common Add-ons",
    items: [
      { name: "24h Blood Pressure Monitoring", price: "$150" },
      { name: "EKG", price: "$150" },
      { name: "Holter Exams", price: "$400 - $750" },
      { name: "Spirometry and Pulmonary Function Tests", price: "$200" },
    ],
  },
];

const conditions = [
  {
    title: "Coronary Artery Disease & Chest Pain",
    items: [
      "Evaluation of chest pain and angina",
      "Coronary artery disease",
      "Post–myocardial infarction care",
      "Cardiovascular risk stratification",
      "Abnormal stress test evaluation",
    ],
  },
  {
    title: "Arrhythmias",
    items: [
      "Palpitations and irregular heartbeat",
      "Atrial fibrillation and atrial flutter",
      "Supraventricular tachycardia",
      "Ventricular ectopy",
      "Holter and event monitor interpretation",
    ],
  },
  {
    title: "Heart Failure & Cardiomyopathy",
    items: [
      "Heart failure",
      "Shortness of breath and fluid overload",
      "Cardiomyopathy",
      "Medical therapy optimization",
      "Post-hospital cardiac optimization",
    ],
  },
  {
    title: "Hypertension & Vascular Risk",
    items: [
      "Hypertension",
      "Resistant blood pressure",
      "Cardiovascular risk management",
      "Metabolic syndrome",
      "Preventive cardiology",
    ],
  },
  {
    title: "Valvular Heart Disease",
    items: [
      "Heart murmur evaluation",
      "Aortic stenosis and regurgitation",
      "Mitral valve prolapse",
      "Tricuspid valve disease",
      "Echocardiography follow-up",
    ],
  },
  {
    title: "Preventive & Lifestyle Cardiology",
    items: [
      "Primary prevention",
      "Smoking cessation support",
      "Exercise prescription",
      "Pre-operative cardiac risk assessment",
      "Athletic and occupational screening",
    ],
  },
];

const otherServices = [
  { name: "Family Medicine, Pediatrics & Urgent Care", link: "/services/family-medicine" },
  { name: "Colon, Rectal & General Surgery", link: "/services/surgery" },
  { name: "Dermatology", link: "/services/dermatology" },
  { name: "Gynecology, Fertility & Menopause", link: "/services/gynecology" },
  { name: "Dietician & Nutrition", link: "/services/nutrition" },
  { name: "Psychology", link: "/services/psychology" },
];

export default function Cardiology() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          kicker="Cardiology"
          title="Consult a cardiologist now."
          description="CloudMed offers comprehensive internal medicine and cardiology care at our Westmount clinic. Cardiac screening, prevention and management of cardiovascular disease with on-site testing."
          video={testingVideo}
        />
        <DoctorsSection
          title="Specialist cardiology care."
          description="CloudMed provides timely cardiology consultations, cardiac screening, diagnostic testing, prevention, and cardiovascular disease management."
          doctors={doctors}
        />
        <PricingSection title="Cardiology services and fees." groups={pricing} />
        <ConditionsSection title="Cardiology conditions we treat." categories={conditions} />
        <ExploreServices services={otherServices} />
        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}