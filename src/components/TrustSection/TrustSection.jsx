import { useEffect, useRef, useState } from "react";
import {
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  MapPin,
  Star,
  Users,
  Stethoscope,
  CalendarDays,
} from "lucide-react";

import trustCare from "../../assets/trust-care.jpg";
import "./TrustSection.css";

function CountUp({ end, suffix = "", duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.45 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-wrapper">
        <div className="trust-content">
          <div className="trust-badge">
            <span></span>
            Trusted Private Healthcare Since 2018
          </div>

          <h2>
            No memberships.
            <br />
            No hidden fees.
            <br />
            <strong>Same day service.</strong>
          </h2>

          <p className="trust-description">
            CloudMed is a premier provider of private healthcare serving the
            Greater Montreal area since 2018. Access experienced clinicians,
            bilingual care, and convenient appointments without referrals or
            surprise charges.
          </p>

          <ul className="trust-list">
            <li>
              <CheckCircle2 size={18} /> No memberships — ever
            </li>
            <li>
              <CheckCircle2 size={18} /> Transparent flat fees, no surprises
            </li>
            <li>
              <CheckCircle2 size={18} /> Same-day and walk-in appointments
            </li>
            <li>
              <CheckCircle2 size={18} /> Bilingual care in French and English
            </li>
          </ul>

          <div className="trust-buttons">
            <a href="#appointment" className="trust-primary-btn">
              <CalendarCheck size={18} />
              Book an Appointment
              <ArrowRight size={16} />
            </a>

            <a href="#services" className="trust-secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="trust-rating">
            <div>
              <div className="trust-stars" role="img" aria-label="5 out of 5 stars">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p>4.9/5 · Trusted by 40,000+ patients</p>
            </div>
          </div>
        </div>

        <div className="trust-image-card">
          <img src={trustCare} alt="CloudMed private healthcare" />

          <div className="trust-floating trust-floating-top">
            <small>Next Available</small>
            
            <span>
              <Clock3 size={13} /> Same-day confirmed
            </span>
          </div>

          <div className="trust-floating trust-floating-right">
            <ShieldCheck size={22} />
            <div>
              <strong>Fully Accredited</strong>
              <span>CMSQ Certified · 2025</span>
            </div>
          </div>

          <div className="trust-location-pill">
            <MapPin size={14} />
            Westmount · Griffintown 
          </div>
        </div>
      </div>

      <div className="impact-section">
        <div className="impact-header">
          <span>Our Impact</span>
          <h2>Trusted by Thousands</h2>
          <p>
            Delivering exceptional private healthcare with compassion,
            excellence, and a patient-first approach.
          </p>
        </div>

        <div className="impact-grid">
          <div className="impact-card">
            <Users />
            <h3>
              <CountUp end={40000} suffix="+" />
            </h3>
            <div className="impact-line"></div>
            <p>Patients Served</p>
          </div>

          <div className="impact-card">
            <Stethoscope />
            <h3>
              <CountUp end={16000} suffix="+" />
            </h3>
            <div className="impact-line"></div>
            <p>Visits Completed</p>
          </div>

          <div className="impact-card">
            <CalendarDays />
            <h3>
              <CountUp end={2018} />
            </h3>
            <div className="impact-line"></div>
            <p>Founded</p>
          </div>

          <div className="impact-card">
            <Star />
            <h3>
              <CountUp end={98} suffix="%" />
            </h3>
            <div className="impact-line"></div>
            <p>Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}