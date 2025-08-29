import React, { useState } from "react";
import "../../styles/book.scss";
import { NavLink } from "react-router-dom";

// IMAGES
import NavbarLogo from "../../assets/img/logo/logo_bg-grey_transparent.png";
import BookBanner from "../../assets/img/ordinary/ordinary_cirkel_skråtop.jpg";
import BookImg from "../../assets/img/events/randers_business_award.jpg";

// ICONS
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Book = () => {
  /* Scroll To Top Button */
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  /* Burger menu */
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  /* Scroll to top when button "sends" user to a new page */
  const btnScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="book">
      {/* Scroll-To-Top */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <img src={BookBanner} className="banner" alt="Billede af Tune It" />

        <nav>
          <NavLink to="/">
            <img src={NavbarLogo} className="logo" alt="Tune It Logo" />
          </NavLink>

          <ul>
            <li>
              <NavLink to="/">Hjem</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book</NavLink>
            </li>
            <li>
              <NavLink to="/singers">Sangere</NavLink>
            </li>
            <li>
              <NavLink to="/songs">Sange</NavLink>
            </li>
            <li>
              <NavLink to="/about">Om</NavLink>
            </li>
          </ul>

          <a className="burger-icon" onClick={handleClick}>
            <GiHamburgerMenu />
          </a>
        </nav>

        <div className={`burger-menu ${isActive ? "active" : ""}`}>
          <a className="cross-icon" onClick={handleClick}>
            <CgClose />
          </a>

          <ul>
            <li>
              <NavLink to="/" onClick={btnScroll}>
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink to="/book" onClick={handleClick}>
                Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/singers" onClick={btnScroll}>
                Sangere
              </NavLink>
            </li>
            <li>
              <NavLink to="/songs" onClick={btnScroll}>
                Sange
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={btnScroll}>
                Om
              </NavLink>
            </li>
          </ul>

          <div className="burger-socials">
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

        <a href="#bookSection" className="arrow-down">
          <FaArrowDown />
        </a>

        <div className="socials">
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
      </header>

      <main id="bookSection">
        <div className="book-content">
          <img
            src={BookImg}
            alt="Billede af Tune It til Randers Business Award"
          />

          <div className="book-txt">
            <h3>Book Tune It til jeres næste arrangement:</h3>

            <p>
              Vi har sunget alle mulige forskellige ting til alle mulige
              forskellige typer arrangementer i Randers og omegn, fra
              firmafesten til awardshowet, og fra kirkerum til Værkets foyer.
              Vores repertoire er bredt, interessant og vidtrækkende... vi har
              endnu ikke oplevet et arrangement, vi ikke kunne levere et
              passende sæt til. Skriv til os og spørg! <br />
              <a href="mailto:susan@tune-it.dk">susan@tune-it.dk</a>
            </p>
          </div>
        </div>

        <div className="prices">
          <h3>Vejledende priser:</h3>

          <div>
            <p>
              15 min: <br />
              30 min: <br />1 time:
            </p>

            <p>
              3.000,- <br />
              5.000,- <br />
              8.000,-
            </p>
          </div>

          <p>
            Afstand, tidspunkt, særønsker osv. kan have indflydelse. <br />
            Skriv gerne til os omkring dit arrangement eller for at få en snak!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Book;
