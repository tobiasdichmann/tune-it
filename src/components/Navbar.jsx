import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarLogo from "../assets/img/logo/logo_bg-grey_transparent.png";
import "../styles/navbar.scss";

// ICONS
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  /* Burger menu */
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  /* Scroll to top and close menu when link is clicked */
  const handleLinkClick = () => {
    setIsActive(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav>
        <NavLink to="/" onClick={handleLinkClick}>
          <img src={NavbarLogo} className="logo" alt="Tune It Logo" />
        </NavLink>

        <ul>
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink to="/book" onClick={handleLinkClick}>
              Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/singers" onClick={handleLinkClick}>
              Sangere
            </NavLink>
          </li>
          <li>
            <NavLink to="/songs" onClick={handleLinkClick}>
              Sange
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick}>
              Om
            </NavLink>
          </li>
        </ul>

        <a href="#!" className="burger-icon" onClick={handleClick}>
          <GiHamburgerMenu />
        </a>
      </nav>

      <div className={`burger-menu ${isActive ? "active" : ""}`}>
        <a href="#!" className="cross-icon" onClick={handleClick}>
          <CgClose />
        </a>

        <ul>
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink to="/book" onClick={handleLinkClick}>
              Book
            </NavLink>
          </li>
          <li>
            <NavLink to="/singers" onClick={handleLinkClick}>
              Sangere
            </NavLink>
          </li>
          <li>
            <NavLink to="/songs" onClick={handleLinkClick}>
              Sange
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleLinkClick}>
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
    </>
  );
};

export default Navbar;
