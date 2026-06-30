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

const doctors=[{name:"Dr. Noëmie Nociti",location:"Westmount",language:"French, English",bio:["Dr. Noëmie Nociti is a psychologist specializing in adult psychotherapy, with expertise in motivation, mental health, and emotional well-being.","She holds both a Doctorate in Psychology – Research Profile and a Doctorate in Psychology – Clinical Intervention Profile.","Her therapeutic framework draws from positive psychology, humanistic psychology, cognitive-behavioural therapy, and other evidence-based approaches tailored to each person’s pace and goals.","She primarily provides individual psychotherapy for adults within a safe, supportive, and compassionate environment."]}];

const pricing=[
{title:"Consultations",items:[{name:"Consultation (Clinic, Virtual)",price:""},{name:"Follow-up Consultation (Clinic, Phone)",price:""}]},
{title:"Comprehensive Evaluations",items:[{name:"Psychological Assessment",price:""},{name:"Mental Health Evaluation",price:""},{name:"Anxiety & Depression Screening",price:""},{name:"Behavioral Assessment",price:""},{name:"Emotional Well-being Evaluation",price:""}]},
{title:"Other Services",items:[{name:"Individual Therapy Sessions",price:""},{name:"Couples Counseling",price:""},{name:"Stress Management Therapy",price:""},{name:"Trauma-Informed Therapy",price:""},{name:"Cognitive Behavioral Therapy",price:""},{name:"Mindfulness-Based Therapy",price:""}]}
];

const conditions=[
{title:"Anxiety, Stress & Burnout",items:["Generalized anxiety disorder","Chronic stress","Burnout","Social and performance anxiety","Difficulty managing pressure"]},
{title:"Depression & Mood Challenges",items:["Depression","Persistent low mood","Loss of motivation","Mood instability","Feelings of hopelessness"]},
{title:"Motivation & Life Transitions",items:["Motivational challenges","Life transitions","Existential questioning","Identity concerns","Personal growth"]},
{title:"Self-Esteem & Emotional Well-Being",items:["Low self-esteem","Confidence concerns","Emotional sensitivity","Difficulty setting boundaries","Body image concerns"]},
{title:"Relationships & Social Challenges",items:["Interpersonal difficulties","Communication challenges","Attachment and trust issues","Family conflict","Social isolation"]},
{title:"Sports Psychology & Performance",items:["Performance stress","Mental preparation","Motivation and goal setting","Emotional resilience","Managing pressure"]}
];

const otherServices=[
{name:"Family Medicine, Pediatrics & Urgent Care",link:"/services/family-medicine"},
{name:"Cardiology",link:"/services/cardiology"},
{name:"Colon, Rectal & General Surgery",link:"/services/surgery"},
{name:"Dermatology",link:"/services/dermatology"},
{name:"Gynecology, Fertility & Menopause",link:"/services/gynecology"},
{name:"Dietician & Nutrition",link:"/services/nutrition"}
];

export default function Psychology(){
return <>
<Navbar/>
<main>
<ServiceHero kicker="Psychology" title="Consult a psychologist now." description="CloudMed offers professional psychology and mental health support at our Westmount clinic. We provide evidence-based therapy, emotional assessment, and personalized treatment plans for anxiety, depression, stress, trauma, and relationship concerns in a safe and confidential setting." video={homeVideo}/>
<DoctorsSection title="Confidential mental health support." description="Evidence-based psychotherapy and emotional support tailored to each client’s needs." doctors={doctors}/>
<PricingSection title="Psychology services and support." groups={pricing}/>
<ConditionsSection title="Mental health concerns we support." categories={conditions}/>
<ExploreServices services={otherServices}/>
<TrustSection/>
<LocationsSection/>
<FAQSection/>
</main>
<Footer/>
</>;
}