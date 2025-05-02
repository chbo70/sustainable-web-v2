import Button from "../utils/Button";
import Card from "../utils/Card";
import Paper1 from "../../assets/tom_greenwood.jpg";
import Paper1Small from "../../assets/tom_greenwood_small.jpg";
import Paper2 from "../../assets/paper_2.jpg";
import Paper2Small from "../../assets/paper_2_small.jpg";
import Paper3 from "../../assets/paper_3.png";
import Paper3Small from "../../assets/paper_3_small.png";
import Paper4 from "../../assets/paper_4.jpg";
import Paper4Small from "../../assets/paper_4_small.jpg";
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
            <picture className="content_card_picture">
              <source srcSet={Paper1Small} media="(max-width: 672px)" />
              <source srcSet={Paper1} media="(min-width: 673px)" />
              <img
                className="content_card_image"
                src={Paper1}
                alt="placeholder"
                loading="lazy"
              />
            </picture>

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
            <picture className="content_card_picture">
              <source srcSet={Paper2Small} media="(max-width: 672px)" />
              <source srcSet={Paper2} media="(min-width: 673px)" />
              <img
                className="content_card_image"
                src={Paper2}
                alt="placeholder"
                loading="lazy"
              />
            </picture>
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
            <picture className="content_card_picture">
              <source srcSet={Paper3Small} media="(max-width: 672px)" />
              <source srcSet={Paper3} media="(min-width: 673px)" />
              <img
                className="content_card_image"
                src={Paper3}
                alt="placeholder"
                loading="lazy"
              />
            </picture>
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
            <picture className="content_card_picture">
              <source srcSet={Paper4Small} media="(max-width: 672px)" />
              <source srcSet={Paper4} media="(min-width: 673px)" />
              <img
                className="content_card_image"
                src={Paper4}
                alt="placeholder"
                loading="lazy"
              />
            </picture>
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
