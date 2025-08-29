import React, { useState } from "react";
import "../../styles/about.scss";
import { NavLink } from "react-router-dom";

// IMAGES
import NavbarLogo from "../../assets/img/logo/logo_bg-grey_transparent.png";
import AboutBanner from "../../assets/img/ordinary/ordinary_mur_forefra.jpg";
import AboutContentOne from "../../assets/img/ordinary/ordinary_bagtæppe_peg.jpg";
import AboutContentTwo from "../../assets/img/ordinary/ordinary_mur_højre.jpg";
import AboutContentThree from "../../assets/img/xmas/xmas_cirkel_skråtop.jpg";

// ICONS
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const About = () => {
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
    <div id="about">
      {/* Scroll-To-Top */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <img src={AboutBanner} className="banner" alt="Billede af Tune It" />

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
              <NavLink to="/book" onClick={btnScroll}>
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
              <NavLink to="/about" onClick={handleClick}>
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

        <a href="#aboutSection" className="arrow-down">
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

      <main id="aboutSection">
        {/* Del 1: Om Tune It og deres unikke koncept */}
        <div className="about-content-one">
          <p>
            Tune It er et vokalensemble fra Randers, der blev dannet i år 2000.
            De fleste medlemmer havde sunget sammen forskellige steder i lang
            tid før, og i dag bor alle stadig i eller tæt ved byen. Vi optræder
            primært i og omkring Randers og er en gang i mellem også på farten
            efter spændende arrangementer. Vi er ikke tilknyttet aftenskole,
            kirke eller lignende, hvilket giver os en dejlig frihed til at
            bestemme selv. Vi synger derfor alt muligt fra blues og jazz til
            swing og pop, altid a capella og ofte med walking bass og human
            beatbox. Vi prioriterer stemningsfyldte ballader og sange med gang i
            og udfordrende arrangementer. Grupper som Real Group, Pentatonix og
            BaSiX er til stor inspiration for os.
          </p>

          <img src={AboutContentOne} alt="Billede af Tune It" />
        </div>

        {/* Del 2: Fokus på publikum og den gode koncertoplevelse */}
        <div className="about-content-two">
          <img src={AboutContentTwo} alt="Billede af Tune It" />

          <p>
            Tune It vil give publikum den engagerende koncertoplevelse, så vi
            har fjernet noder og dirigent for at skabe en mere direkte kontakt.
            Vi synger alle sange udenad og præsenterer dem med
            baggrundinformation og humor for at skabe en levende atmosfære
            gennem sangforståelse. Med "barriererne" mod publikum væk, får vi
            altid positive kommentarer med på vejen om glæde og engagement på
            scenen. Det stiller naturligvis ret store krav til nye medlemmer om
            hurtig udenadslære, men de kan bære det, især når man ser hvordan
            det bidrager til en stærk klang og øget opmærksomhed på detaljer.
          </p>
        </div>

        {/* Del 3: Arbejdsglæde, julesange og motto */}
        <div className="about-content-three">
          <p>
            Tune It lægger stor vægt på at have det sjovt sammen. Vores motto,
            "Vi synger for at have det sjovt - men det er ikke rigtig sjovt,
            medmindre det også lyder godt!", afspejler de to vigtigste elementer
            i vores fokus. Vi har to typer repertoire (med tilhørende
            koncerttøj), et til julesangene i november/december, og et til
            resten af året. Uanset koncertindholdet brænder vi for at levere
            medrivende og underholdende koncertoplevelser. Vores fokus på
            publikum, sangglæde og unikke koncept gør os til et spændende
            indslag på musikscenen og til arrangementer i Randers og omegn.
          </p>

          <img src={AboutContentThree} alt="Billede af Tune It" />
        </div>
      </main>
    </div>
  );
};

export default About;
