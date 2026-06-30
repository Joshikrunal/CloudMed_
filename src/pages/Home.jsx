import Navbar          from "../components/Navbar/Navbar";
import HeroSection     from "../components/HeroSection/HeroSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TrustSection    from "../components/TrustSection/TrustSection";
import DoctorsSection  from "../components/DoctorsSection/DoctorsSection";
import LocationsSection from "../components/LocationsSection/LocationsSection";
import FAQSection      from "../components/FAQSection/FAQSection";
import Footer          from "../components/Footer/Footer";

import drRishi   from "../assets/doctors/DR. Rishi.jpg";
import drCristina from "../assets/doctors/2026-02-24 CloudMed 315.jpg";

const homeDoctors = [
  {
    name: "Dr. R. Chugh",
    qualification: "MD, Family Medicine",
    specialty: "Medical Director",
    experience: "Clinical practice since 2014",
    language: "French, English and Hindi",
    location: "Westmount and Griffintown",
    image: drRishi,
    shortBio: "Dr. Rishi Chugh is the Medical Director of Clinique CloudMed. He completed his Family Medicine residency at McGill University and has advanced training in cosmetic and aesthetic medicine.",
    bio: [
      "Dr. Rishi Chugh is the Medical Director of Clinique CloudMed and has been in clinical practice since 2014.",
      "He completed his Family Medicine residency at McGill University, based at St. Mary's Hospital.",
      "He has completed advanced training in cosmetic and aesthetic medicine.",
    ],
  },
  {
    name: "Cristina Zop",
    qualification: "BScN, Esthetic Certification",
    specialty: "Nurse · Esthetic Medicine",
    experience: "Clinical nursing and esthetic care",
    language: "French and English",
    location: "Griffintown",
    image: drCristina,
    shortBio: "Cristina Zop completed her BScN at McGill University and gained clinical experience at the Jewish General Hospital before specializing in esthetic medicine.",
    bio: [
      "Cristina Zop completed her Bachelor of Science in Nursing at McGill University in 2019.",
      "She gained clinical experience at the Jewish General Hospital in post-surgical and NICU care.",
      "In 2022, she completed her esthetic certification with the Canadian Board of Esthetic Medicine.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <DoctorsSection
          title="Meet the CloudMed team."
          description="Experienced, bilingual clinicians committed to exceptional private healthcare — from family medicine to advanced esthetic treatments."
          doctors={homeDoctors}
        />
        <LocationsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
