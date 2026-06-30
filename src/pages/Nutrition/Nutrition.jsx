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

const doctors=[{name:"Florence Sydney",location:"Westmount",language:"French, English",bio:["Florence Sydney is an award-winning dietitian, researcher, and cookbook author with over 24 years of experience in nutrition.","She graduated with a B.Sc. in Dietetics and Human Nutrition from McGill University in 2002 and is a member of the Ordre des diététistes-nutritionnistes du Québec and the Canadian Nutrition Society.","Her expertise includes women’s health nutrition, fertility, pregnancy, perimenopause, menopause, metabolic syndrome, diabetes, dyslipidemia, hypertension, obesity, fatty liver disease, and weight management.","Her practice supports adult patients seeking evidence-based nutritional guidance tailored to their individual health goals."]}];

const pricing=[{title:"Consultations",items:[{name:"Consultation (Clinic, Virtual)",price:"$180"},{name:"Follow-up Consultation (Clinic, Phone)",price:"$180"}]}];

const conditions=[
{title:"Women’s Health & Hormonal Nutrition",items:["Fertility nutrition support","Preconception nutrition planning","Pregnancy nutrition guidance","Perimenopause symptom management","Menopause nutrition support","Iron deficiency and anemia support"]},
{title:"Metabolic Syndrome & Cardiovascular Health",items:["Metabolic syndrome management","Type 2 diabetes nutrition support","Insulin resistance management","High cholesterol support","Hypertension nutrition care","Cardiovascular risk reduction"]},
{title:"Weight Management & Body Composition",items:["Healthy weight loss support","Healthy weight gain guidance","Metabolic optimization","Post-menopause weight management","Long-term weight maintenance"]},
{title:"Liver Health",items:["Fatty liver disease nutrition support","Liver health optimization","Metabolic liver function support"]},
{title:"Preventive Nutrition & Wellness",items:["Preventive nutrition planning","Energy and fatigue management","Healthy lifestyle coaching","Long-term wellness and health maintenance"]}
];

const otherServices=[
{name:"Family Medicine, Pediatrics & Urgent Care",link:"/services/family-medicine"},
{name:"Cardiology",link:"/services/cardiology"},
{name:"Colon, Rectal & General Surgery",link:"/services/surgery"},
{name:"Dermatology",link:"/services/dermatology"},
{name:"Gynecology, Fertility & Menopause",link:"/services/gynecology"},
{name:"Psychology",link:"/services/psychology"}
];

export default function Nutrition(){
return <>
<Navbar/>
<main>
<ServiceHero kicker="Dietician & Nutrition" title="Consult a Dietician & Nutrition Specialist Today." description="CloudMed offers personalized nutrition and wellness services at our Westmount clinic. Our dieticians provide evidence-based guidance for weight management, healthy eating, hormonal balance, digestive health, and long-term wellness through customized nutrition plans and lifestyle support." video={homeVideo}/>
<DoctorsSection title="Personalized nutrition guidance." description="Evidence-based nutritional support tailored to adult patients and their long-term health goals." doctors={doctors}/>
<PricingSection title="Nutrition services and fees." groups={pricing}/>
<ConditionsSection title="Nutrition concerns we support." categories={conditions}/>
<ExploreServices services={otherServices}/>
<TrustSection/>
<LocationsSection/>
<FAQSection/>
</main>
<Footer/>
</>;
}