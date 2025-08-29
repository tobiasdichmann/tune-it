import React, { useState } from "react";
import "../../styles/home.scss";
import { NavLink } from "react-router-dom";

// PAGES

// IMAGES
import NavbarLogo from "../../assets/img/logo/logo_bg-grey_transparent.png";
import HomeBanner from "../../assets/img/ordinary/ordinary_bagtæppe.jpg";
import HomeAboutImg from "../../assets/img/ordinary/ordinary_mur_venstre.jpg";

// ICONS
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Home = () => {
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
    <div id="home">
      {/* Scroll-To-Top */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <img src={HomeBanner} className="banner" alt="Billede af Tune It" />

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
              <NavLink to="/" onClick={handleClick}>
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink to="/book" onClick={btnScroll}>Book</NavLink>
            </li>
            <li>
              <NavLink to="/singers" onClick={btnScroll}>Sangere</NavLink>
            </li>
            <li>
              <NavLink to="/songs" onClick={btnScroll}>Sange</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={btnScroll}>Om</NavLink>
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

        <a href="#homeAboutSection" className="arrow-down">
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

      <main id="homeAboutSection">
        <div className="home-about-content">
          <p>
            Tune It har sunget i Randers og omegn i over 20 år, og vi har alle
            en tæt tilknytning til byen. Vi sørger altid for at levere en
            rytmisk koncertoplevelse med stemning og gang i den. <br />
            Vores koncept med at synge uden noder og dirigent giver en glad og
            tæt stemning, mens vi synger vores jazz, blues, swing og pop-sange a
            capella. Til gengæld er der masser af walking bass, human beatbox og
            inspirerede soloer.
          </p>

          <NavLink to="/about" onClick={btnScroll}>
            <button>Læs mere her</button>
          </NavLink>
        </div>

        <img src={HomeAboutImg} alt="Billede af Tune It" />
      </main>

      <section id="quote">
        <p>
          <q>
            Jeg har to gange haft fornøjelsen at lave workshop med Tune It, og
            jeg er begge gange blevet imponeret over den velsyngende
            vokalgruppe: sprøde sopraner, groovy alter, funky tenorer og steady
            basser. Tune It klinger rent og lækkert, er rigtig godt
            sammensunget, synger dynamisk og swinger fedt. De serverer deres
            repertoire med udadvendt charme og humor, og jeg glæder mig til at
            høre mere til gruppen i fremtiden!
          </q>
          <i>- Niels Nørgaard, Basix</i>
        </p>
      </section>

      <section id="homeBookSongsSection">
        <div className="home-book-content">
          <h3>Book os til jeres næste arrangement!</h3>

          <p>
            Book os, hvis du gerne vil have en veloplagt sang-oplevelse udover
            det sædvanlige til dit arrangement.
          </p>

          <NavLink to="/book" onClick={btnScroll}>
            <button>Book os her</button>
          </NavLink>
        </div>

        <div className="home-songs-section">
          <h3>
            Vi synger for at have det sjovt <br />
            <i>
              - men det er ikke rigtig sjovt, <br />
              <span>medmindre det også lyder godt!</span>
            </i>
          </h3>

          <NavLink to="/songs" onClick={btnScroll}>
            <button>Hør os her</button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
