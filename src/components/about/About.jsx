import React, { lazy, useEffect, useRef, useState } from "react";
import "./about.css";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image1 from "../../assets/slider_images/image_1.avif";
import Image2 from "../../assets/slider_images/image_2.avif";
import Image3 from "../../assets/slider_images/image_3.avif";
import Image4 from "../../assets/slider_images/image_4.avif";
import Image5 from "../../assets/slider_images/image_5.avif";
import Image6 from "../../assets/slider_images/image_6.avif";
import Image7 from "../../assets/slider_images/image_7.avif";
import Image8 from "../../assets/slider_images/image_8.avif";
import Image9 from "../../assets/slider_images/image_9.avif";

gsap.registerPlugin();

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const About = () => {
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -currentIndex * 100 + "%",
        ease: "power2.out",
        duration: 0.2,
      });
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Drag Start
  const handleDragStart = (e) => {
    setIsDragging(true);
    const touch = e.touches ? e.touches[0] : e;
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
  };

  // Drag Move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches ? e.touches[0] : e;
    setCurrentX(touch.clientX);
  };

  // Drag End
  const handleDragEnd = () => {
    if (!isDragging) return;
    const deltaX = startX - currentX;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }

    setIsDragging(false);
  };

  return (
    <section className="about" ref={aboutRef}>
      <div className="about_text">
        <h1 className="about_text_header">What is this Website About</h1>
        <p className="about_text_content">
          This website is an example project created as part of a bachelor
          thesis focused on sustainable web design. It is based on an analysis
          of existing web pages, where the used media, fonts, design and carbon
          emission score are evaluated. This website is the foundation for the
          results of the multivocal literature review, where methods are being
          tested if and how much they can reduce the carbon emission.
          <br />
          For applying and testing the methods, a second website based of this
          one will be created. The structure stays the same, but the methods
          will be applied and tested.
        </p>
      </div>

      <div className="about_slider">
        <button className="slider_button left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div
          className="slides-container"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="slides-inner" ref={sliderRef}>
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <button className="slider_button right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default About;
