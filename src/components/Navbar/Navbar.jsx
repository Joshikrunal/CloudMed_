import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import MegaMenu from "../MegaMenu/MegaMenu";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 80);

      if (currentScroll > lastScroll && currentScroll > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cm-navbar 
        ${scrolled ? "scrolled" : ""} 
        ${hidden ? "hide" : ""}`}
      >

        <button
          className="cm-menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
        </button>


        <Link to="/" className="cm-logo">
  CloudMed
</Link>

        <div className="cm-nav-actions">

          <a href="#locations" className="cm-location-link">
            <MapPin />
          </a>

          <a href="#appointment" className="cm-appointment-btn">
            Book an appointment
          </a>

        </div>

      </header>


      <MegaMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

    </>
  );
}