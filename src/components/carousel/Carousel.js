// import { useState, useEffect } from "react";
// import "./Carousel.css";

// import slides from "../../data/CarouselData.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { motion, AnimatePresence } from "framer-motion";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const length = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setDirection(1); // Slide to the right
//     setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setDirection(-1); // Slide to the left
//     setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 100 : -100, // Adjust for smoother transition
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section id="home-section" className="carousel">
//       <FontAwesomeIcon icon={faArrowLeft} className="arrow arrow-left" onClick={prevSlide} />
//       <FontAwesomeIcon icon={faArrowRight} className="arrow arrow-right" onClick={nextSlide} />

//       <div className="carousel-inner">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             className="slide"
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               type: "tween",
//               duration: 0.5,
//               ease: [0.25, 0.25, 0.25, 0.25], // Custom easing function for smoothness
//             }}
//           >
//             <div className="image-container">
//               <motion.img
//                 src={slides[currentSlide].src}
//                 alt={slides[currentSlide].alt}
//                 className="image"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <motion.img
//                 src={slides[currentSlide].mobileSrc}
//                 alt={slides[currentSlide].alt}
//                 className="mobile-image"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <motion.div className="text-overlay">
//                 <a href="#contact">
//                   <button className="primary-button">Contact</button>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="indicators">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={index === currentSlide ? "indicator" : "indicator indicator-inactive"}
//             onClick={() => setCurrentSlide(index)}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Carousel;


// import { useState, useEffect } from "react";
// import "./Carousel.css";
// import slides from "../../data/CarouselData.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { motion, AnimatePresence } from "framer-motion";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const length = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? length - 1 : prev - 1));
//   };

//   const variants = {
//     enter: {
//       opacity: 0,
//     },
//     center: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.8,
//       },
//     },
//   };

//   return (
//     <section id="home-section" className="carousel">
//       <FontAwesomeIcon
//         icon={faArrowLeft}
//         className="arrow arrow-left"
//         onClick={prevSlide}
//       />
//       <FontAwesomeIcon
//         icon={faArrowRight}
//         className="arrow arrow-right"
//         onClick={nextSlide}
//       />

//       <div className="carousel-inner">
//         <AnimatePresence mode="wait"> {/* Updated to use mode="wait" */}
//           <motion.div
//             key={currentSlide}
//             className="slide"
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//           >
//             <div className="image-container">
//               <motion.img
//                 src={slides[currentSlide].src}
//                 alt={slides[currentSlide].alt}
//                 className="image"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               />
//               <motion.img
//                 src={slides[currentSlide].mobileSrc}
//                 alt={slides[currentSlide].alt}
//                 className="mobile-image"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//               />
//               <motion.div className="text-overlay">
//                 <a href="#contact">
//                   <button className="primary-button">Contact</button>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="indicators">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={index === currentSlide ? "indicator" : "indicator indicator-inactive"}
//             onClick={() => setCurrentSlide(index)}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Carousel;

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

