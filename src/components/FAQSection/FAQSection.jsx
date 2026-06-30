import { useState } from "react";
import { Plus } from "lucide-react";
import "./FAQSection.css";

const defaultFaqs = [
  { question: "Do I need a membership to visit CloudMed?",              answer: "No memberships, no hidden fees: pay as you go with no file or membership fees." },
  { question: "Can I receive receipts for insurance or tax purposes?",  answer: "Yes. You'll receive detailed receipts that may be eligible for tax credits or insurance reimbursement." },
  { question: "Who can receive care at CloudMed?",                      answer: "We care for infants, children, adults, and seniors." },
  { question: "Does private health insurance cover CloudMed services?", answer: "If you have private health insurance, check with your insurer to confirm eligible reimbursements. In many cases, testing services are reimbursed." },
  { question: "Does CloudMed bill RAMQ?",                               answer: "Our services are private and we do not bill RAMQ, the Régie de l'assurance maladie du Québec." },
  { question: "Can I still use the public healthcare system?",          answer: "Yes. If you have RAMQ coverage, you can choose to complete tests, diagnostics, and consultations in the public system at no charge." },
  { question: "Will visiting CloudMed affect my RAMQ family doctor?",   answer: "No. Seeing a CloudMed clinician does not affect your relationship with your RAMQ family doctor." },
];

export default function FAQSection({ faqs, heading, subheading }) {
  const [openIndex, setOpenIndex] = useState(null);
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  const normalised = items.map((f) => ({
    question: f.question || f.q,
    answer:   f.answer   || f.a,
  }));

  return (
    <section className="faq-section">
      <div className="faq-inner">

        <div className="faq-left">
          <span className="faq-kicker">FAQ</span>
          <h2 className="faq-heading">
            {heading || "Frequently asked questions."}
          </h2>
          {subheading && <p className="faq-sub">{subheading}</p>}
          <a href="#appointment" className="faq-cta">Book a Consultation</a>
        </div>

        <div className="faq-list">
          {normalised.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-q-text">{faq.question}</span>
                  <div className="faq-icon-wrap">
                    <Plus className="faq-icon" size={16} strokeWidth={2.5} />
                  </div>
                </button>

                <div className="faq-answer-wrap">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}