import "./ServiceHero.css";

export default function ServiceHero({ kicker, title, description, video }) {
  return (
    <section className="service-hero">
      {video && (
        <video className="service-hero-video" autoPlay muted loop playsInline>
          <source src={video} />
        </video>
      )}

      <div className="service-hero-overlay"></div>

      <div className="service-hero-content">
        <p className="service-hero-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="service-hero-buttons">
          <a href="#appointment">Book an Appointment</a>
          <a href="#catalog">Download Catalog</a>
        </div>
      </div>
    </section>
  );
}