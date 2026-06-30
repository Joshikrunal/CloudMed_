import { useState } from "react";
import "./PricingSection.css";

const defaultPricingGroups = [
  {
    title: "Consultations",
    items: [
      { name: "Consultation (Clinic, Virtual)", price: "$250" },
      { name: "Consultation (At-Home 60 Min)", price: "$1200" },
      { name: "Follow-up Consultation (Clinic)", price: "$100" },
      { name: "Follow-up Consultation (At Home)", price: "—" },
      { name: "Follow-up Consultation (Phone)", price: "—" },
    ],
  },
  {
    title: "Comprehensive Evaluations",
    items: [
      {
        name: "Well-Child Checkup (Ages 0–5)",
        price: "$350",
        details: [
          "360° Assessment",
          "Cognitive",
          "Social",
          "Gross Motor Skills",
          "Fine Motor Skills",
          "Weight, Height, Head Circumference",
        ],
      },
      {
        name: "ADHD Evaluation",
        price: "$1000",
        details: [
          "Ages 18+",
          "2 consultations + follow-ups",
          "360° Assessment",
          "Neurocognitive",
          "Mental + Social",
          "Serological + Physical",
          "Treatment plan, if indicated",
        ],
      },
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
      {
        name: "Holter Exams",
        price: "",
        details: [
          "1 Day — $400",
          "2 Days — $450",
          "3 Days — $500",
          "7 Days — $600",
          "10 Days — $650",
          "14 Days — $750",
        ],
      },
      { name: "Spirometry and Pulmonary Function Tests", price: "$200" },
    ],
  },
];

export default function PricingSection({
  title = "Our Services and Fees",
  description = "Clear, upfront fees for all consultations, procedures, evaluations, and add-on services. No hidden charges.",
  groups = defaultPricingGroups,
}) {
  const [activeTab, setActiveTab] = useState(0);
  const safeGroups = groups.length ? groups : defaultPricingGroups;
  const currentGroup = safeGroups[activeTab] || safeGroups[0];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span>Pricing</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="pricing-tabs">
        {safeGroups.map((group, index) => (
          <button
            type="button"
            key={group.title}
            className={`pricing-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="pricing-table">
        <div className="pricing-table-head">
          <span>Service</span>
          <span>Fee</span>
        </div>

        {currentGroup.items.map((item) => (
          <div className="pricing-table-row" key={item.name}>
            <div className="pricing-service">
              <span>{item.name}</span>

              {Array.isArray(item.details) && item.details.length > 0 && (
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            <strong>{item.price || "—"}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}