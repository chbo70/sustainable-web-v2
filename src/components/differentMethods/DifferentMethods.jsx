import React from "react";
import Masonry from "../utils/Masonry/Masonry";
import "./differentmethods.css";
import Image1 from "../../assets/masonry_images/image_01.webp";
import Image2 from "../../assets/masonry_images/image_02.webp";
import Image3 from "../../assets/masonry_images/image_03.webp";
import Image4 from "../../assets/masonry_images/image_04.webp";
import Image5 from "../../assets/masonry_images/image_05.webp";
import Image6 from "../../assets/masonry_images/image_06.webp";
import Image7 from "../../assets/masonry_images/image_07.webp";
import Image8 from "../../assets/masonry_images/image_08.webp";
import Image9 from "../../assets/masonry_images/image_09.webp";
import Image10 from "../../assets/masonry_images/image_10.webp";
import Image11 from "../../assets/masonry_images/image_11.webp";
import Image12 from "../../assets/masonry_images/image_12.webp";
import Image13 from "../../assets/masonry_images/image_13.webp";

const data = [
  { id: 1, image: Image1, height: 400 },
  { id: 2, image: Image2, height: 300 },
  { id: 3, image: Image3, height: 500 },
  { id: 4, image: Image4, height: 400 },
  { id: 5, image: Image5, height: 700 },
  { id: 6, image: Image6, height: 500 },
  { id: 7, image: Image7, height: 800 },
  { id: 8, image: Image8, height: 500 },
  { id: 9, image: Image9, height: 600 },
  { id: 10, image: Image10, height: 600 },
  { id: 11, image: Image11, height: 700 },
  { id: 12, image: Image12, height: 400 },
  { id: 13, image: Image13, height: 300 },
];

const DifferentMethods = () => {
  return (
    <section className="differentMethods">
      <h1 className="differentMethods_header">Sample Images</h1>
      <Masonry data={data} />
    </section>
  );
};

export default DifferentMethods;
