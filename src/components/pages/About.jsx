import React, { useState } from "react";
import "../../styles/about.scss";

// IMAGES
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

  return (
    <div id='about'>
      {/* Scroll-To-Top */}
      <button
        className='scroll-to-top'
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>

      <header>
        <img src={AboutBanner} className='banner' alt='Billede af Tune It' />
        <h1 className='hero-title'>Hvem er vi?</h1>
        <a href='#aboutSection' className='arrow-down'>
          <FaArrowDown />
        </a>

        <div className='socials'>
          <a
            href='https://www.instagram.com/tune_it_randers/?hl=da'
            title='@tune_it_randers'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>

          <a
            href='https://www.facebook.com/tuneit?locale=da_DK'
            title='Tune It'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF />
          </a>
        </div>
      </header>

      <main id='aboutSection'>
        {/* Del 1: Om Tune It og deres unikke koncept */}
        <div className='about-content-one'>
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

          <div className='image-wrapper'>
            <img src={AboutContentOne} alt='Billede af Tune It' />
          </div>
        </div>

        {/* Del 2: Fokus på publikum og den gode koncertoplevelse */}
        <div className='about-content-two'>
          <div className='image-wrapper'>
            <img src={AboutContentTwo} alt='Billede af Tune It' />
          </div>

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
        <div className='about-content-three'>
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

          <div className='image-wrapper'>
            <img src={AboutContentThree} alt='Billede af Tune It' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
