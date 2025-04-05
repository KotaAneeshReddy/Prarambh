import { useState, useEffect } from "react";
import "./Carousel.css";
import slides from "../../data/CarouselData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section id="home-section" className="carousel">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow arrow-right"
        onClick={nextSlide}
      />

      <div className="carousel-inner">
        <div className="slide">
          <div className="image-container">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="image"
            />
            <img
              src={slides[currentSlide].mobileSrc}
              alt={slides[currentSlide].alt}
              className="mobile-image"
            />
            <div className="text-overlay">
              <a href="#contact-section">
                <button className="primary-button">Contact</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={index === currentSlide ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;

