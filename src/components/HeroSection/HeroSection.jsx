import "./HeroSection.css";
import heroVideo from "../../assets/videos/home page.webm";

export default function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/webm" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Exceptional Healthcare is here</h1>

        <p>
          We deliver comprehensive end-to-end care—from family medicine,
          pediatrics and urgent care to a full spectrum of specialties.
          Our clinics offer complete testing, esthetic and sexual wellness
          services to complement our medical care.
        </p>

        <div className="hero-buttons">
          <a href="#appointment" className="primary-btn">
            Book an Appointment
          </a>

          <a href="#catalog" className="secondary-btn">
            Download Catalog
          </a>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        
      </div>
    </section>
  );
}