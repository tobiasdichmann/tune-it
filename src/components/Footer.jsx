import React from "react";
import "../styles/footer.scss";

// ICONS
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <p>
          Skriv til os, hvis I har spørgsmål: <br />
          <a href="mailto:susan@tune-it.dk">susan@tune-it.dk</a>
        </p>
      </div>

      <div className="socials">
        <p>Find os her:</p>

        <div className="socials-icons">
          <a
            href="https://www.instagram.com/tune_it_randers/?hl=da"
            title="@tune_it_randers"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/tuneit?locale=da_DK"
            title="Tune It"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
