import React, { useState } from "react";
import "../../styles/book.scss";


// IMAGES
import BookBanner from "../../assets/img/ordinary/ordinary_cirkel_skråtop.jpg";
import BookImg from "../../assets/img/events/randers_business_award.jpg";

// ICONS
import {
  FaArrowUp,
  FaArrowDown,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

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

        <h1 className="hero-title">Book Os</h1>

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
        <div className="book-grid">
          <div className="book-left-column">
            <section className="book-intro">
              <h3>Book Tune It til jeres næste arrangement:</h3>
              <p>
                Vi har sunget alle mulige forskellige ting til alle mulige
                forskellige typer arrangementer i Randers og omegn, fra
                firmafesten til awardshowet, og fra kirkerum til Værkets foyer.
                Vores repertoire er bredt, interessant og vidtrækkende... vi har
                endnu ikke oplevet et arrangement, vi ikke kunne levere et
                passende sæt til. Skriv til os og spørg!
              </p>
            </section>

            <section className="book-prices">
              <h3>Vejledende priser:</h3>

              <div className="price-table">
                <div className="price-row">
                  <span className="price-label">15 min:</span>
                  <span className="price-value">3.000,-</span>
                </div>
                <div className="price-row">
                  <span className="price-label">30 min:</span>
                  <span className="price-value">5.000,-</span>
                </div>
                <div className="price-row">
                  <span className="price-label">1 time:</span>
                  <span className="price-value">8.000,-</span>
                </div>
              </div>

              <p className="price-disclaimer">
                Afstand, tidspunkt, særønsker osv. kan have indflydelse. <br />
                Skriv gerne til os omkring dit arrangement eller for at få en snak!
              </p>

              <div className="btn-container">
                <a href="mailto:susan@tune-it.dk" className="book-btn" title="susan@tune-it.dk">
                  Send os en forespørgsel
                </a>
              </div>
            </section>
          </div>

          <div className="book-right-column">
            <img
              src={BookImg}
              alt="Billede af Tune It til Randers Business Award"
              className="featured-image"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
