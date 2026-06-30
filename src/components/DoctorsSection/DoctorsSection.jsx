import DoctorCard from "../DoctorCard/DoctorCard";
import "./DoctorsSection.css";

export default function DoctorsSection({ title, description, doctors = [] }) {
  return (
    <section className="doctors-section">
      <div className="section-heading">
        <span>Meet our Specialists</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.name} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}