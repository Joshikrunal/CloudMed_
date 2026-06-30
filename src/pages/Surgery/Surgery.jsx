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
import surgeryVideo from "../../assets/videos/surgery.webm";

const doctors = [
  {
    name: "Dr. Barry Stein",
    location: "Westmount",
    language: "French, English",
    bio: [
      "Barry L. Stein is the Director of the Center for Colon and Rectal Surgery at the McGill University Health Centre, with clinical practice based at the Royal Victoria Hospital and the Montreal General Hospital.",
      "He is an Assistant Professor of Surgery and Oncology at McGill University and is a specialist in both colorectal and general surgery.",
      "His clinical expertise includes endoscopic management of polyps, surgical treatment of colon and rectal cancer, inflammatory bowel disease, and minimally invasive laparoscopic surgical techniques.",
      "His research interests include rectal cancer management, radiotherapy protocols, Enhanced Recovery After Surgery, minimally invasive surgery, and prehabilitation strategies.",
    ],
  },
];

const pricing = [
  {
    title: "Consultations & Procedures",
    items: [
      { name: "Consultation (Clinic / Virtual)", price: "$375" },
      { name: "Follow-up Consultation (Clinic / Phone)", price: "$250" },
      { name: "Band Ligation", price: "$275" },
      { name: "Band Ligation (Repeat)", price: "$200" },
      { name: "Hemorrhoid Excision", price: "$500" },
      { name: "Anal Lesion Excision (Single)", price: "$500" },
      { name: "Anal Lesions Excision (Multiple)", price: "$700" },
      { name: "Botulinum Toxin A for Anal Fissure", price: "$1000" },
      { name: "Pilonidal Cyst Treatment", price: "$500 - $800" },
      { name: "Sebaceous Cyst Removal", price: "$400" },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "FIT (IFOB)", price: "$110" },
      { name: "Calprotectin", price: "$146" },
      { name: "Stool Culture", price: "$72 / each" },
      { name: "Ova and Parasites", price: "$108 / each" },
      { name: "Celiac Screening", price: "$104" },
    ],
  },
];

const conditions = [
  {
    title: "Hemorrhoids & Anal Conditions",
    items: [
      "Internal and external hemorrhoids",
      "Thrombosed hemorrhoids",
      "Anal fissures",
      "Anal skin tags",
      "Pruritus ani",
      "Minimally invasive hemorrhoid treatments",
    ],
  },
  {
    title: "Anorectal Infections",
    items: [
      "Perianal and perirectal abscess",
      "Infected anal glands",
      "Painful swelling and drainage",
      "Urgent anorectal infection care",
      "Post-procedure healing management",
    ],
  },
  {
    title: "Anal Fistulas & Sinus Tracts",
    items: [
      "Anal fistula diagnosis",
      "Complex fistulas",
      "Fistula-in-ano management",
      "Seton placement",
      "Post-surgical monitoring",
    ],
  },
  {
    title: "Colon & Rectal Cancer Screening",
    items: [
      "Colorectal cancer screening",
      "Polyp detection",
      "Family history-based screening",
      "Early detection",
      "Colonoscopy coordination",
    ],
  },
  {
    title: "Inflammatory Bowel Disease",
    items: [
      "Crohn’s disease",
      "Ulcerative colitis",
      "IBD-related complications",
      "Fistulas and abscesses",
      "Care coordination",
    ],
  },
  {
    title: "General Surgery",
    items: [
      "Hernia evaluation",
      "Gallbladder disease consultations",
      "Abdominal pain assessment",
      "Lipoma and cyst removal",
      "Skin lesion excision",
      "Minor surgical procedures",
    ],
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

export default function Surgery() {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          kicker="Colon, Rectal & General Surgery"
          title="Consult a colon & rectal specialist now."
          description="CloudMed offers comprehensive colon and rectal surgery services at our Westmount clinic. Screening, diagnosis, and treatment of colorectal conditions including hemorrhoids, fissures, fistulas, and colorectal disease with advanced on-site care."
          video={surgeryVideo}
        />
        <DoctorsSection
          title="Specialized colorectal and general surgery care."
          description="CloudMed offers private surgical consultations, diagnosis, treatment planning, and minor procedures with experienced specialist support."
          doctors={doctors}
        />
        <PricingSection title="Colon, rectal and general surgery pricing." groups={pricing} />
        <ConditionsSection title="Conditions and procedures we manage." categories={conditions} />
        <ExploreServices services={otherServices} />
        <TrustSection />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}