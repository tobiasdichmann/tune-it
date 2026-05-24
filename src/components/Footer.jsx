import React from "react";
import "../styles/footer.scss";

// ICONS
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="brand-logo">Tune It</h2>
          <p className="brand-tagline">Vokalensemble fra Randers</p>
        </div>

        <div className="footer-info">
          <div className="contacts">
            <span className="footer-label">Kontakt</span>
            <p>
              Skriv til os, hvis I har spørgsmål:<br />
              <a href="mailto:susan@tune-it.dk" className="email-link">
                susan@tune-it.dk
              </a>
            </p>
          </div>

          <div className="socials">
            <span className="footer-label">Find os her</span>
            <div className="socials-icons">
              <a
                href="https://www.instagram.com/tune_it_randers/?hl=da"
                title="@tune_it_randers"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/tuneit?locale=da_DK"
                title="Tune It"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {currentYear} Tune It. Alle rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
