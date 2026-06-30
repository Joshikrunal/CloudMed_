import { useState } from "react";
import {
  Languages,
  MapPin,
  ArrowRight,
  X,
  BriefcaseMedical,
} from "lucide-react";
import "./DoctorCard.css";

export default function DoctorCard({ doctor = {} }) {
  const [openProfile, setOpenProfile] = useState(false);

  const bio = Array.isArray(doctor.bio) ? doctor.bio : [];

  const shortBio =
    doctor.shortBio ||
    bio[0] ||
    "Provides personalized, patient-centered care with a focus on comfort, trust, and clinical excellence.";

  const imagePosition = doctor.imagePosition || "center center";

  return (
    <>
      <article className="doctor-premium-card">
        <div className="doctor-premium-photo">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={doctor.name || "Doctor"}
              style={{ objectPosition: imagePosition }}
            />
          ) : (
            <span>Photo</span>
          )}
        </div>

        <div className="doctor-premium-info">
          <div className="doctor-info-top">
            <h3>{doctor.name || "Doctor"}</h3>

            {doctor.qualification && (
              <p className="doctor-qualification">{doctor.qualification}</p>
            )}

            {doctor.credentials && (
              <p className="doctor-credentials">{doctor.credentials}</p>
            )}

            {doctor.specialty && (
              <p className="doctor-specialty">{doctor.specialty}</p>
            )}

            {doctor.experience && (
              <p className="doctor-experience">{doctor.experience}</p>
            )}

            <div className="doctor-meta-row">
              {doctor.language && (
                <div className="doctor-meta-item">
                  <Languages size={18} strokeWidth={1.8} />
                  <span>{doctor.language}</span>
                </div>
              )}

              {doctor.location && (
                <div className="doctor-meta-item">
                  <MapPin size={18} strokeWidth={1.8} />
                  <span>{doctor.location}</span>
                </div>
              )}
            </div>

            <p className="doctor-short-bio">{shortBio}</p>

            <button
              type="button"
              className="doctor-profile-link"
              onClick={() => setOpenProfile(true)}
            >
              View Profile <ArrowRight size={18} />
            </button>
          </div>

          <div className="doctor-card-footer">
            <a href="#appointment" className="doctor-book-btn">
              Book Appointment
            </a>
          </div>
        </div>
      </article>

      {openProfile && (
        <div className="doctor-modal-backdrop">
          <aside className="doctor-profile-panel">
            <button
              type="button"
              className="doctor-modal-close"
              onClick={() => setOpenProfile(false)}
              aria-label="Close profile"
            >
              <X size={24} />
            </button>

            <div className="doctor-profile-layout">
              <div className="doctor-profile-left">
                <div className="doctor-profile-photo">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name || "Doctor"}
                      style={{ objectPosition: imagePosition }}
                    />
                  ) : (
                    <span>Photo</span>
                  )}
                </div>

                <div className="doctor-profile-meta">
                  {doctor.language && (
                    <div>
                      <Languages size={22} />
                      <div>
                        <strong>Languages</strong>
                        <p>{doctor.language}</p>
                      </div>
                    </div>
                  )}

                  {doctor.location && (
                    <div>
                      <MapPin size={22} />
                      <div>
                        <strong>Location</strong>
                        <p>{doctor.location}</p>
                      </div>
                    </div>
                  )}

                  {doctor.specialty && (
                    <div>
                      <BriefcaseMedical size={22} />
                      <div>
                        <strong>Specialty</strong>
                        <p>{doctor.specialty}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="doctor-profile-right">
                <h2>{doctor.name || "Doctor"}</h2>

                {doctor.qualification && (
                  <p className="doctor-profile-qualification">
                    {doctor.qualification}
                  </p>
                )}

                {doctor.credentials && (
                  <p className="doctor-profile-qualification">
                    {doctor.credentials}
                  </p>
                )}

                {doctor.specialty && (
                  <p className="doctor-profile-specialty">
                    {doctor.specialty}
                  </p>
                )}

                {doctor.experience && (
                  <p className="doctor-profile-experience">
                    {doctor.experience}
                  </p>
                )}

                <div className="doctor-profile-divider"></div>

                <h4>About {doctor.name || "Doctor"}</h4>

                <div className="doctor-profile-bio">
                  {bio.length > 0 ? (
                    bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  ) : (
                    <p>{shortBio}</p>
                  )}
                </div>

                {Array.isArray(doctor.expertise) &&
                  doctor.expertise.length > 0 && (
                    <>
                      <h4>Areas of Expertise</h4>
                      <div className="doctor-expertise-tags">
                        {doctor.expertise.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </>
                  )}

                <a href="#appointment" className="doctor-profile-book">
                  Book Appointment
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}