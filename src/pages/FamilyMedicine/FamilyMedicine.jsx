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

import homeVideo from "../../assets/videos/home page.webm";

const doctors = [
  {
    name: "Dr. P. Budhiraja",
    location: "Westmount",
    language: "French, English and Hindi",
    hours: "Weekdays, 9a-5p",
    bio: [
      "Dr. Paul Budhiraja is a compassionate and experienced family physician with over 10 years of clinical practice. He earned his medical degree from McGill University in 2010 and completed his residency training at St. Mary’s Hospital in 2012.",
      "Dr. Budhiraja provides comprehensive care for patients of all ages, from newborns to seniors. He treats mental health conditions, sports injuries, arthritis, hypertension, diabetes, cholesterol management, and sexual health.",
      "With a special interest in complex medical care, Dr. Budhiraja is committed to attentive follow-up, continuity of care, preventive medicine, weight management, cardiovascular health, and routine cancer screening.",
      "He also has experience assisting patients with medical documentation related to insurance claims and workplace cases, including SAAQ and CNESST files.",
    ],
  },
  {
    name: "Dr. R. Lamanque",
    location: "Griffintown",
    language: "French, English",
    hours: "Weekdays, 9a-5p",
    bio: [
      "Dr. Rachel Lamanque is a dedicated and compassionate physician committed to delivering high-quality, patient-centered care.",
      "After earning her medical degree from the Université de Montréal in 2023, Dr. Lamanque completed her residency training in Family Medicine at the same institution.",
      "She has a particular interest in mental health and is committed to providing comprehensive, evidence-based care tailored to each patient’s needs.",
      "Her previous experience includes working at Villa Medica and providing primary care within a GMF clinic.",
    ],
  },
  {
    name: "Dr. R. Chugh",
    
    location: "Westmount and Griffintown",
    language: "French, English and Hindi",
    hours: "On demand",
    bio: [
      "Dr. Rishi Chugh is the Medical Director of Clinique CloudMed and has been in clinical practice since 2014.",
      "He completed his Family Medicine residency at McGill University, based at St. Mary’s Hospital.",
      "His practice focuses on extended private consultations, longevity medicine, musculoskeletal health, chronic disease optimization, preventive care, and personalized medicine.",
      "Dr. Chugh also oversees the aesthetic medicine services at CloudMed.",
    ],
  },
];

const pricing = [
  {
    title: "Consultations",
    items: [
      { name: "Consultation (Clinic, Virtual)", price: "$250" },
      { name: "Consultation (At-Home 60 Min)", price: "$1200" },
      { name: "Follow-up Consultation (Clinic)", price: "$100" },
      { name: "Follow-up Consultation (At Home)", price: "" },
      { name: "Follow-up Consultation (Phone)", price: "" },
    ],
  },
  {
    title: "Comprehensive Evaluations",
    items: [
      { name: "Well-Child Checkup (Ages 0-5)", price: "$350" },
      { name: "360° Assessment: cognitive, social, gross motor skills, fine motor skills", price: "" },
      { name: "Weight, height, head circumference", price: "" },
      { name: "ADHD Evaluation", price: "$1000" },
      { name: "Ages 18+, 2 consultations + follow-ups, 360° assessment and treatment plan if indicated", price: "" },
    ],
  },
  {
    title: "Other Services",
    items: [
      { name: "Forms", price: "$100" },
      { name: "Wound Care", price: "$150" },
      { name: "Sutures", price: "$350" },
      { name: "Suture Removal", price: "$50" },
      { name: "Vaccination", price: "$60" },
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
    title: "General & Acute Care",
    items: ["Cold, flu, and respiratory infections", "Fever, cough, sore throat, sinusitis", "UTIs", "Gastroenteritis", "Skin infections, rashes, eczema, dermatitis", "Minor injuries, sprains, strains", "Headaches and migraines"],
  },
  {
    title: "Chronic Disease Management",
    items: ["Hypertension", "Type 2 diabetes and pre-diabetes", "High cholesterol", "Asthma and COPD", "Thyroid disorders", "Obesity and metabolic syndrome", "Cardiovascular risk prevention"],
  },
  {
    title: "Mental Health & Neurodevelopmental Care",
    items: ["Anxiety disorders", "Depression and mood disorders", "ADHD", "Insomnia and sleep disorders", "Stress-related conditions and burnout", "Adjustment disorders"],
  },
  {
    title: "Women’s Health",
    items: ["Contraception counselling", "IUD insertion and removal", "Menstrual disorders", "Menopause management", "Pap tests", "Breast health concerns"],
  },
  {
    title: "Men’s Health",
    items: ["Erectile dysfunction", "Testosterone deficiency assessment", "Prostate health screening discussions", "Sexual health concerns"],
  },
  {
    title: "Sexual Health & STI Care",
    items: ["STI testing and treatment", "PrEP/PEP for HIV prevention", "Genital symptoms", "Sexual health counselling"],
  },
  {
    title: "Pediatrics",
    items: ["Newborn and infant care", "Vaccinations", "Growth monitoring", "Childhood infections", "Behavioral concerns", "Sports and school physicals"],
  },
  {
    title: "Preventive Medicine & Screening",
    items: ["Annual check-ups", "Vaccinations", "Cancer screening", "Cardiovascular risk assessment", "Lifestyle counselling"],
  },
  {
    title: "Musculoskeletal & Geriatric Care",
    items: ["Back and neck pain", "Arthritis", "Tendonitis", "Sports injuries", "Frailty assessment", "Memory concerns", "Fall prevention"],
  },
];

const otherServices = [
  { name: "Cardiology", link: "/services/cardiology" },
  { name: "Colon, Rectal & General Surgery", link: "/services/surgery" },
  { name: "Dermatology", link: "/services/dermatology" },
  { name: "Gynecology, Fertility & Menopause", link: "/services/gynecology" },
  { name: "Dietician & Nutrition", link: "/services/nutrition" },
  { name: "Psychology", link: "/services/psychology" },
];

export default function FamilyMedicine() {
  return (
    <>
      <Navbar />

      <main>
        <ServiceHero
          kicker="Family Medicine"
          title="Consult a family doctor now."
          description="CloudMed offers family medicine, pediatric, geriatric and urgent care consultations at our clinics in Westmount and Griffintown. Patients receive free follow-up phone consultations to discuss results."
          video={homeVideo}
        />

        <DoctorsSection
          title="Experienced family physicians."
          description="Our family physicians consult patients for any concerns for a single standard fee, including free follow-up phone consultation. All patients receive copies of their test results and complimentary phone follow-up with a CloudMed physician or nurse."
          doctors={doctors}
        />

        <PricingSection title="Transparent family medicine pricing." groups={pricing} />

        <ConditionsSection
          title="Comprehensive care for everyday and complex concerns."
          categories={conditions}
        />

        <ExploreServices services={otherServices} />

        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}