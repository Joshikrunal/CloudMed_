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
import dermatologyVideo from "../../assets/videos/dermatology.mp4";

const doctors=[{name:"Dr. Howard Yanofsky",location:"Westmount",language:"French, English",bio:["Dr. Howard Yanofsky is a board-certified dermatologist and Fellow of the Royal College of Physicians and Surgeons of Canada with extensive experience in medical, surgical, and cosmetic dermatology.","He earned his medical degree from McGill University and later completed dermatology training before serving as Assistant Professor of Dermatology at McGill University.","Dr. Yanofsky provides comprehensive dermatologic care for acne, eczema, psoriasis, rosacea, skin infections, skin cancer, hair and nail conditions.","His expertise includes biologic therapies, phototherapy, dermoscopy, and Mohs micrographic surgery."]}];

const pricing=[{title:"Consultations",items:[{name:"Consultation (Clinic, Virtual)",price:"$225"},{name:"Follow-up Consultation (Clinic, Phone)",price:"$150"}]},{title:"Procedures",items:[{name:"Cryotherapy",price:"$50 - variable"},{name:"Cauterization",price:"$150 - variable"},{name:"Genital Warts Treatment",price:"$200 - $600"},{name:"Excision Procedures",price:"$150 - $750"},{name:"Scalp cyst",price:"$450 per site"},{name:"Intralesional Kenalog",price:"$75"}]}];

const conditions=[{title:"Acne & Breakouts",items:["Mild, moderate and severe acne","Hormonal acne","Cystic acne","Acne scars and post-acne marks","Blackheads and whiteheads"]},{title:"Eczema & Dermatitis",items:["Atopic dermatitis","Contact dermatitis","Seborrheic dermatitis","Hand and facial dermatitis","Skin barrier repair"]},{title:"Psoriasis & Chronic Skin Conditions",items:["Plaque psoriasis","Scalp psoriasis","Nail psoriasis","Long-term disease control","Chronic skin inflammation"]},{title:"Skin Infections",items:["Fungal infections","Bacterial skin infections","Viral infections","Nail infections","Targeted treatment"]},{title:"Hair & Scalp Disorders",items:["Hair loss","Androgenetic hair loss","Telogen effluvium","Dandruff","Scalp inflammation"]},{title:"Skin Cancer Screening",items:["Full skin examinations","Mole mapping","Biopsy and diagnostic procedures","Risk assessment","Prevention strategies"]}];

const otherServices=[
{name:"Family Medicine, Pediatrics & Urgent Care",link:"/services/family-medicine"},
{name:"Cardiology",link:"/services/cardiology"},
{name:"Colon, Rectal & General Surgery",link:"/services/surgery"},
{name:"Gynecology, Fertility & Menopause",link:"/services/gynecology"},
{name:"Dietician & Nutrition",link:"/services/nutrition"},
{name:"Psychology",link:"/services/psychology"}
];

export default function Dermatology(){
return <>
<Navbar/>
<main>
<ServiceHero kicker="Dermatology" title="Consult a dermatologist now." description="CloudMed offers comprehensive dermatology care at our Westmount clinic. Diagnosis, treatment, and prevention of skin, hair, and nail conditions including acne, eczema, psoriasis, and skin lesions with advanced on-site care." video={dermatologyVideo}/>
<DoctorsSection title="Medical, surgical and cosmetic dermatology." description="Comprehensive dermatologic care for skin, hair and nail concerns with evidence-based treatment planning." doctors={doctors}/>
<PricingSection title="Dermatology services and fees." groups={pricing}/>
<ConditionsSection title="Skin, hair and nail conditions we treat." categories={conditions}/>
<ExploreServices services={otherServices}/>
<TrustSection/>
<LocationsSection/>
<FAQSection/>
</main>
<Footer/>
</>;
}