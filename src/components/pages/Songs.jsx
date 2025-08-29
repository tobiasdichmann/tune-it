import React, { useState } from "react";
import "../../styles/songs.scss";
import ReactCompareImage from "react-compare-image";
import { NavLink } from "react-router-dom";

// IMAGES
import NavbarLogo from "../../assets/img/logo/logo_bg-grey_transparent.png";
import ImgOne from "../../assets/img/ordinary/ordinary_bagtæppe_slider.jpg";
import ImgTwo from "../../assets/img/xmas/xmas_bagtæppe_slider.jpg";
import AudioImgOne from "../../assets/img/ordinary/ordinary_mur_venstre.jpg";
import AudioImgTwo from "../../assets/img/xmas/xmas_mur_højre.jpg";
import AudioImgThree from "../../assets/img/xmas/xmas_mur_venstre.jpg";

// AUDIO
import JDJDJJJ from "../../assets/audio/ja_da_ja_da_jing_jing_jing.mp3";
import BBW from "../../assets/audio/big_bad_world.mp3";
import TWFC from "../../assets/audio/the_world_for_christmas.mp3";
import ISMKSC from "../../assets/audio/i_saw_mommy_kissing_santa_claus.mp3";
import TCS from "../../assets/audio/the_christmas_song.mp3";

// ICONS15z
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
  FaMusic,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Songs = () => {
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

  /* Pausing all other audio elements on a site if you click on a play button, except the one selected */
  document.addEventListener(
    "play",
    function (e) {
      var audios = document.getElementsByTagName("audio");
      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
        }
      }
    },
    true
  );

  return (
    <div id="songs">
      {/* Scroll-To-Top */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <div className="banner">
          <ReactCompareImage leftImage={ImgOne} rightImage={ImgTwo} />
        </div>

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
              <NavLink to="/songs" onClick={handleClick}>
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

        <a href="#songsLists" className="arrow-down">
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

      <section id="songsLists">
        <h3>
          Nuværende Repertoire
          <a href="#songsAudioClips" className="audio-clips-link">
            <FaMusic className="node-icon" />
            Hør os her
          </a>
        </h3>

        <div className="list-container">
          <div className="ordinary-list">
            <table>
              {/* Take Me Home */}
              <tr>
                <td>Take Me Home</td>
                <td>
                  Audra Mar Butts, Kirstin Maldonado and Kevin Olusola / arr:
                  Dan Satter / adpt: M. Ellgaard
                </td>
              </tr>

              {/* Run To You */}
              <tr>
                <td>Run To You</td>
                <td>Pentatonix</td>
              </tr>

              {/* Ja Da Ja Da Jing Jing Jing */}
              <tr>
                <td>Ja Da Ja Da Jing Jing Jing</td>
                <td>B. Carleton</td>
              </tr>

              {/* Since You've Been Gone */}
              <tr>
                <td>Since You've Been Gone</td>
                <td>Emma Nilsdotter & Anders Edenroth</td>
              </tr>

              {/* Orange Colored Sky */}
              <tr>
                <td>Orange Colored Sky</td>
                <td>Milton Delugg & Willie Stein / arr: Jakob Marstrand</td>
              </tr>

              {/* Elefantens vuggevise */}
              <tr>
                <td>Elefantens vuggevise</td>
                <td>
                  Harald H. Lund & Mogens Jermiin Nissen / arr: Jakob Marstrand
                </td>
              </tr>

              {/* Big Bad World */}
              <tr>
                <td>Big Bad World</td>
                <td>The Real Group / arr: Kristine Poulsgaard</td>
              </tr>

              {/* Pass Me The Jazz */}
              <tr>
                <td>Pass Me The Jazz</td>
                <td>The Real Group / Anders Edenroth</td>
              </tr>

              {/* Forget About October */}
              <tr>
                <td>Forget About October</td>
                <td>Zapp Zapp / Gitte Frank / adpt: M. Ellgaard</td>
              </tr>

              {/* Scandinavian Shuffle */}
              <tr>
                <td>Scandinavian Shuffle</td>
                <td>Swe-Danes / arr: Jens Johansen</td>
              </tr>

              {/* Lift Me Up */}
              <tr>
                <td>Lift Me Up</td>
                <td>The Real Group / arr: Tijs Krammer</td>
              </tr>

              {/* Chili Con Carne */}
              <tr>
                <td>Chili Con Carne</td>
                <td>The Real Group / Anders Edenroth</td>
              </tr>

              {/* My Baby Just Cares for Me */}
              <tr>
                <td>My Baby Just Cares for Me</td>
                <td>Kane & Donaldsen / arr: Tijs Krammer</td>
              </tr>

              {/* Star Wars Medley */}
              <tr>
                <td>Star Wars Medley</td>
                <td>John Williar / trscr: M. Fletcher & B. Dred</td>
              </tr>

              {/* Fix You */}
              <tr>
                <td>Fix You</td>
                <td>Coldplay / arr: L Raaschou</td>
              </tr>
            </table>
          </div>

          <div className="xmas-list">
            <table>
              {/* The World for Chrismas */}
              <tr>
                <td>The World for Chrismas</td>
                <td>The Real Group / Anders Edenroth</td>
              </tr>

              {/* Hver Gang Det Bli'r Vinter */}
              <tr>
                <td>Hver Gang Det Bli'r Vinter</td>
                <td>Helle Hansen / arr: Signe Bøge</td>
              </tr>

              {/* Winter Wonderland / Don't Worry Be Happy */}
              <tr>
                <td>Winter Wonderland / Don't Worry Be Happy</td>
                <td>Pentatonix / arr. Katie Schuld</td>
              </tr>

              {/* That's Christmas To Me */}
              <tr>
                <td>That's Christmas To Me</td>
                <td>Pentatonix / adpt: Tomas J.</td>
              </tr>

              {/* Peters Jul */}
              <tr>
                <td>Peters Jul</td>
                <td>J. Krohm / Michael Bojesen</td>
              </tr>

              {/* I Saw Mommy Kissing Santa Claus */}
              <tr>
                <td>I Saw Mommy Kissing Santa Claus</td>
                <td>Tommie Connor / arr: Richard Allain</td>
              </tr>

              {/* Mary Did You Know */}
              <tr>
                <td>Mary Did You Know</td>
                <td>Clay Aiken / arr: Pentatonix</td>
              </tr>

              {/* Sleigh Ride */}
              <tr>
                <td>Sleigh Ride</td>
                <td>Parish & Anderson / arr. Tijs Krammer</td>
              </tr>

              {/* The Christmas Song */}
              <tr>
                <td>The Christmas Song</td>
                <td>Mel Torme / Robert Wells</td>
              </tr>

              {/* Joy to the World */}
              <tr>
                <td>Joy to the World</td>
                <td>Isaac Watts / arr: Pentatonix</td>
              </tr>

              {/* Have Yourself a Merry Little Christmas */}
              <tr>
                <td>Have Yourself a Merry Little Christmas</td>
                <td>Hugh Martin & Ralph Blane / arr: Peter Gritton</td>
              </tr>

              {/* Eatnemen Vuelie / Song of the Earth */}
              <tr>
                <td>Eatnemen Vuelie / Song of the Earth</td>
                <td>Silesian Folk Melody / arr: Frode Fjellheim</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <main id="songsAudioClips">
        {/* Ja Da Ja Da Jing Jing Jing / Big Bad World */}
        <div className="audio-container audio-container-one">
          <div className="audio-clips">
            {/* Ja Da Ja Da Jing Jing Jing, B. Carleton */}
            <div>
              <h3>Ja Da Ja Da Jing Jing Jing</h3>
              <p>B. Carleton</p>

              <audio controls>
                <source src={JDJDJJJ} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </div>

            {/* Big Bad World, The Real Group */}
            <div>
              <h3>Big Bad World</h3>
              <p>The Real Group</p>

              <audio controls>
                <source src={BBW} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>

          <img src={AudioImgOne} alt="Billede af Tune It" />
        </div>

        {/* The World for Chrismas / I Saw Mommy Kissing Santa Claus */}
        <div className="audio-container audio-container-two">
          <img src={AudioImgTwo} alt="Billede af Tune It" />

          <div className="audio-clips">
            {/* The World for Chrismas, The Real Group */}
            <div>
              <h3>The World for Chrismas</h3>
              <p>The Real Group</p>

              <audio controls>
                <source src={TWFC} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </div>

            {/* I Saw Mommy Kissing Santa Claus, Tommie Connor */}
            <div>
              <h3>I Saw Mommy Kissing Santa Claus</h3>
              <p>Tommie Connor</p>

              <audio controls>
                <source src={ISMKSC} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>
        </div>

        {/* The Christmas Song */}
        <div className="audio-container audio-container-one">
          <div className="audio-clips">
            {/* The Christmas Song, Mel Torme / Robert Wells */}
            <div>
              <h3>The Christmas Song</h3>
              <p>Mel Torme / Robert Wells</p>

              <audio controls>
                <source src={TCS} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>

          <img src={AudioImgThree} alt="Billede af Tune It" />
        </div>
      </main>
    </div>
  );
};

export default Songs;
