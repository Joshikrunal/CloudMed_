import { useState } from "react";
import {
  Activity,
  Heart,
  Search,
  Stethoscope,
  CircleAlert,
  Flame,
} from "lucide-react";
import "./ConditionsSection.css";

const icons = [Activity, CircleAlert, Heart, Stethoscope, Search, Flame];

export default function ConditionsSection({
  title = "Conditions We Treat",
  description = "Expert evaluation and treatment across a comprehensive range of clinical, specialty, and wellness conditions.",
  categories = [],
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="conditions-section">
      <div className="conditions-header">
        <div>
          <span>Clinical Services</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>

      <div className="conditions-grid">
        {categories.map((category, index) => {
          const Icon = icons[index % icons.length];
          const isOpen = openIndex === index;

          return (
            <article
              key={category.title}
              className={`condition-card ${isOpen ? "active" : ""}`}
            >
              <div className="condition-card-shine" />

              <div className="condition-icon">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <h3>{category.title}</h3>

              {category.description && <p>{category.description}</p>}

              {isOpen && (
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <button
                type="button"
                className="condition-toggle"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {isOpen ? "Close +" : "Read More →"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}