import { MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
     <div className="footer-top">
  <div className="footer-brand">
    <h2>CloudMed</h2>
    <p>Exceptional healthcare is here.</p>
  </div>
</div>

      <div className="footer-middle">
        <div>
          <h3>Services</h3>
          <a href="#">Family Medicine</a>
          <a href="#">Cardiology</a>
          <a href="#">Dermatology</a>
          <a href="#">Gynecology</a>
          <a href="#">Laboratory Testing</a>
        </div>

        <div>
          <h3>Locations</h3>
          <a href="#locations">Westmount</a>
          <a href="#locations">Griffintown</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p><Phone size={16} /> (514) 000-0000</p>
          <p><Mail size={16} /> info@cloudmed.ca</p>
          <p><MapPin size={16} /> Montreal, Quebec</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CloudMed. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}