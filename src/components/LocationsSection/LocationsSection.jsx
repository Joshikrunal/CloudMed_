import { MapPin, ArrowRight } from "lucide-react";
import "./LocationsSection.css";

import westmountImg   from "../../assets/services/family-medicine.jpg";
import griffintownImg from "../../assets/services/dermatology.jpg";
import downtownImg    from "../../assets/services/cardiology.jpg";

const LOCATIONS = [
  {
    id:      "westmount",
    name:    "Westmount",
    address: "Private healthcare in the heart of Westmount, Montreal.",
    img:     null,   // set via import below
    mapUrl:  "https://www.google.com/maps/search/?api=1&query=CloudMed+Westmount+Montreal",
    badge:   null,
  },
  {
    id:      "griffintown",
    name:    "Griffintown",
    address: "Modern private care in the heart of Griffintown, Montreal.",
    img:     null,
    mapUrl:  "https://www.google.com/maps/search/?api=1&query=CloudMed+Griffintown+Montreal",
    badge:   null,
  },
  {
    id:      "downtown",
    name:    "Golden Square Mile",
    address: "Our newest premium clinic is currently under development in the heart of Montreal.",
    img:     null,
    mapUrl:  null,
    badge:   "Coming Soon",
  },
];

const IMGS = [westmountImg, griffintownImg, downtownImg];

export default function LocationsSection() {
  return (
    <section className="loc-section" id="locations">

      <div className="loc-header">
        <span className="loc-kicker">Our Locations</span>
        <h2>Two Clinics · One More Coming</h2>
        <p>CloudMed operates two private clinics in Montreal — Westmount and Griffintown — with a third downtown location opening in 2025.</p>
      </div>

      <div className="loc-grid">
        {LOCATIONS.map((loc, i) => (
          <div
            key={loc.id}
            className={`loc-card${loc.mapUrl ? " loc-card--clickable" : ""}`}
            onClick={() => loc.mapUrl && window.open(loc.mapUrl, "_blank", "noopener,noreferrer")}
            role={loc.mapUrl ? "button" : undefined}
            tabIndex={loc.mapUrl ? 0 : undefined}
          >
            {/* Photo */}
            <img src={IMGS[i]} alt={loc.name} className="loc-card-img" />

            {/* Navy overlay */}
            <div className="loc-card-overlay" />

            {/* Badge */}
            {loc.badge && <span className="loc-badge">{loc.badge}</span>}

            {/* Content */}
            <div className="loc-card-content">
              <div className="loc-icon">
                <MapPin size={22} strokeWidth={1.8} />
              </div>
              <h3>{loc.name}</h3>
              <p>{loc.address}</p>
              <span className="loc-link">
                {loc.mapUrl ? "View on Map" : "Opening Soon"}
                <ArrowRight size={13} strokeWidth={2} />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
