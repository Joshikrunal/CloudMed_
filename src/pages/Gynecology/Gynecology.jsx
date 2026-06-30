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
import gynecVideo from "../../assets/videos/Gynec.mp4";

const doctors = [{ name: "Dr. Karen Buzaglo", location: "Westmount", language: "French, English", bio: ["Dr. Buzaglo is a graduate of McGill University’s Faculty of Medicine, where she also completed her residency in Obstetrics & Gynecology.", "She completed advanced fellowship training in Gynecologic Reproductive Endocrinology and Infertility at l’Université de Montréal, obtaining Royal College certification in 2013.", "Her areas of expertise include egg freezing, IVF, menopause, sexual wellness, reproductive health, and post-menopausal health optimization.", "She is passionate about empowering women to take charge of their health at every stage of life."] }];

const pricing = [{ title: "Consultations", items: [{ name: "Consultation (Clinic, Virtual)", price: "$375" }, { name: "Follow-up Consultation (Clinic, Phone)", price: "$250" }] }, { title: "Comprehensive Evaluations", items: [{ name: "Endometrial biopsy", price: "$175" }, { name: "Vulvar biopsy", price: "$250" }, { name: "Bartholin cyst", price: "$800" }, { name: "IUD insertion", price: "$200" }, { name: "IUD removal", price: "$80" }, { name: "ThinPrep PAP", price: "$120" }, { name: "HPV test", price: "$155" }, { name: "Ultrasound", price: "$275" }] }];

const conditions = [{ title: "Menstrual & Hormonal Disorders", items: ["Irregular periods", "Heavy or painful periods", "Amenorrhea", "Hormonal imbalances", "PMS and PMDD"] }, { title: "Fertility & Reproductive Health", items: ["Infertility evaluation", "Ovulation disorders", "PCOS", "Preconception counseling", "Fertility treatment planning"] }, { title: "Menopause & Perimenopause", items: ["Hot flashes", "Mood changes", "Vaginal dryness", "Hormone replacement therapy", "Long-term menopause health"] }, { title: "Pregnancy & Early Care", items: ["Early pregnancy assessment", "Prenatal guidance", "Pregnancy testing", "Miscarriage support"] }, { title: "Vaginal & Cervical Health", items: ["Vaginal infections", "STI care", "Pap tests", "Abnormal Pap follow-up", "Vaginal irritation"] }, { title: "Preventive Women’s Health", items: ["Routine gynecological exams", "Cancer screening", "HPV vaccination guidance", "Hormonal health counseling", "Long-term wellness planning"] }];

const otherServices = [
    { name: "Family Medicine, Pediatrics & Urgent Care", link: "/services/family-medicine" },
    { name: "Cardiology", link: "/services/cardiology" },
    { name: "Colon, Rectal & General Surgery", link: "/services/surgery" },
    { name: "Dermatology", link: "/services/dermatology" },
    { name: "Dietician & Nutrition", link: "/services/nutrition" },
    { name: "Psychology", link: "/services/psychology" }
];

export default function Gynecology() {
    return <>
        <Navbar />
        <main>
            <ServiceHero kicker="Gynecology, Fertility & Menopause" title="Consult a women’s health specialist now." description="CloudMed offers comprehensive gynecology, fertility, and menopause care at our Westmount clinic. Diagnosis, treatment, and preventive care for women’s health including reproductive health, hormonal balance, fertility support, and menopause management with advanced on-site care." video={gynecVideo} />
            <DoctorsSection title="Women’s health care at every stage." description="Personalized gynecology, fertility and menopause care with medical guidance and preventive support." doctors={doctors} />
            <PricingSection title="Gynecology services and fees." groups={pricing} />
            <ConditionsSection title="Women’s health conditions we treat." categories={conditions} />
            <ExploreServices services={otherServices} />
            <TrustSection />
            <LocationsSection />
            <FAQSection />
        </main>
        <Footer />
    </>;
}