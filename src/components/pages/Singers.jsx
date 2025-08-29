import React, { useState } from "react";
import "../../styles/singers.scss";
import { NavLink } from "react-router-dom";

// IMAGES
import NavbarLogo from "../../assets/img/logo/logo_bg-grey_transparent.png";
import SingersBanner from "../../assets/img/ordinary/ordinary_stole.jpg";
//-------
import Vibeke from "../../assets/img/profiles/vibeke.png";
import Marlene from "../../assets/img/profiles/marlene.png";
import Louise from "../../assets/img/profiles/louise.png";
import Silje from "../../assets/img/profiles/silje.png";
import Susan from "../../assets/img/profiles/susan.png";
import Moes from "../../assets/img/profiles/moes.png";
import Ebbe from "../../assets/img/profiles/ebbe.png";
import Ronni from "../../assets/img/profiles/ronni.png";
import Morten from "../../assets/img/profiles/morten.png";
import Lars from "../../assets/img/profiles/lars.png";

// ICONS
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Singers = () => {
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
    <div id="singers">
      {/* Scroll-To-Top */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <img src={SingersBanner} className="banner" alt="Billede af Tune It" />

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
              <NavLink to="/singers" onClick={handleClick}>
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

        <a href="#singersSection" className="arrow-down">
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

      <main id="singersSection">
        <div className="sopraner-content">
          <h3>Sopraner</h3>

          <div className="singer-profiles">
            {/* Vibeke Bonde Persson */}
            <div className="singer-profile">
              <h4>Vibeke Bonde Persson</h4>
              <p>1. Sopran</p>
              <img src={Vibeke} alt="Billede af Vibeke Bonde Persson" />
            </div>

            {/* Marlene Lillebæk */}
            <div className="singer-profile">
              <h4>Marlene Lillebæk</h4>
              <p>1. Sopran</p>
              <img src={Marlene} alt="Billede af Marlene Lillebæk" />
            </div>

            {/* Louise Raaschou Andersen */}
            <div className="singer-profile">
              <h4>Louise Raaschou Andersen</h4>
              <p>2. Sopran</p>
              <img src={Louise} alt="Billede af Louise Raaschou Andersen" />
            </div>
          </div>
        </div>

        <div className="alter-content">
          <h3>Alter</h3>

          <div className="singer-profiles">
            {/* Silje Visby */}
            <div className="singer-profile">
              <h4>Silje Visby</h4>
              <p>1. Alt | 2. Sopran</p>
              <img src={Silje} alt="Billede af Silje Visby" />
            </div>

            {/* Susan Dichmann */}
            <div className="singer-profile">
              <h4>Susan Dichmann</h4>
              <p>1. Alt | Booking</p>
              <img src={Susan} alt="Billede af Susan Dichmann" />
            </div>

            {/* Lone Moeslund Larsen */}
            <div className="singer-profile">
              <h4>Lone Moeslund Larsen</h4>
              <p>2. Alt</p>
              <img src={Moes} alt="Billede af Lone Moeslund Larsen" />
            </div>
          </div>
        </div>

        <div className="tenorer-basser-content">
          <div className="tenorer-content">
            <h3>Tenorer</h3>

            <div className="singer-profiles">
              {/* Ebbe Skak Larsen */}
              <div className="singer-profile">
                <h4>Ebbe Skak Larsen</h4>
                <p>1. Tenor | Formand</p>
                <img src={Ebbe} alt="Billede af Ebbe Skak Larsen" />
              </div>

              {/* Ronni Møller */}
              <div className="singer-profile">
                <h4>Ronni Møller</h4>
                <p>2. Tenor</p>
                <img src={Ronni} alt="Billede af Ronni Møller" />
              </div>
            </div>
          </div>

          <div className="basser-content">
            <h3>Basser</h3>

            <div className="singer-profiles">
              {/* Morten Ellgaard */}
              <div className="singer-profile">
                <h4>Morten Ellgaard</h4>
                <p>1. Bas | Dirigent</p>
                <img src={Morten} alt="Billede af Morten Ellgaard" />
              </div>

              {/* Lars Hjuler */}
              <div className="singer-profile">
                <h4>Lars Hjuler</h4>
                <p>2. Bas</p>
                <img src={Lars} alt="Billede af Lars Hjuler" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Singers;
