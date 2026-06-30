import "./SectionHeading.css";

export default function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-heading">
      {kicker && <span>{kicker}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}