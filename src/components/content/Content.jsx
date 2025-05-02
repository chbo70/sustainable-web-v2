import Button from "../utils/Button";
import Card from "../utils/Card";
import Paper1 from "../../assets/tom_greenwood.webp";
import Paper2 from "../../assets/paper_2.webp";
import Paper3 from "../../assets/paper_3.webp";
import Paper4 from "../../assets/paper_4.webp";
import "./content.css";
import React, { useEffect, useRef } from "react";

const Content = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.4, // Trigger when 10% of the section is visible
      }
    );

    const contentElement = contentRef.current;

    if (contentElement) {
      observer.observe(contentElement);
    }

    return () => {
      if (contentElement) {
        observer.unobserve(contentElement);
      }
    };
  }, []);

  return (
    <section className="content" ref={contentRef}>
      <div className="content_header_wrapper">
        <h1 className="content_header">Latest Research</h1>
      </div>
      <div className="content_wrapper">
        {/* <Card
          title="Title 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
        <Card
          title="Title 2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
        <Card
          title="Title 3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
        <Card
          title="Title 4"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        /> */}
        <div className="card_wrapper">
          <div className="content_card">
            <img
              className="content_card_image"
              src={Paper1}
              alt="placeholder"
              loading="lazy"
            />
            <h1 className="content_card_title">Sustainable Web Design</h1>
            <div className="content_card_divider"></div>
            <p className="content_card_content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              omnis reiciendis aspernatur error maiores illum, similique
              necessitatibus voluptatem eum? Pariatur repellendus perspiciatis
              eligendi impedit ut, cupiditate distinctio ex beatae et!
            </p>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="content_card">
            <img
              className="content_card_image"
              src={Paper2}
              alt="placeholder"
              loading="lazy"
            />
            <h1 className="content_card_title">Best Practices</h1>
            <div className="content_card_divider"></div>
            <p className="content_card_content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              omnis reiciendis aspernatur error maiores illum, similique
              necessitatibus voluptatem eum? Pariatur repellendus perspiciatis
              eligendi impedit ut, cupiditate distinctio ex beatae et!
            </p>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="content_card">
            <img
              className="content_card_image"
              src={Paper3}
              alt="placeholder"
              loading="lazy"
            />
            <h1 className="content_card_title">Web Analytic Tools</h1>
            <div className="content_card_divider"></div>
            <p className="content_card_content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              omnis reiciendis aspernatur error maiores illum, similique
              necessitatibus voluptatem eum? Pariatur repellendus perspiciatis
              eligendi impedit ut, cupiditate distinctio ex beatae et!
            </p>
          </div>
        </div>
        <div className="card_wrapper">
          <div className="content_card">
            <img
              className="content_card_image"
              src={Paper4}
              alt="placeholder"
              loading="lazy"
            />
            <h1 className="content_card_title">20 Lessons</h1>
            <div className="content_card_divider"></div>
            <p className="content_card_content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              omnis reiciendis aspernatur error maiores illum, similique
              necessitatibus voluptatem eum? Pariatur repellendus perspiciatis
              eligendi impedit ut, cupiditate distinctio ex beatae et!
            </p>
          </div>
        </div>
      </div>
      <div className="content_button_wrapper">
        <Button className="content_button" link="#" text="read more" />
      </div>
    </section>
  );
};

export default Content;
