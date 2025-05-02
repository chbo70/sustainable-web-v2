import React from "react";
import "./feature.css";
import Puzzle from "../../assets/icons/puzzle.svg";
import { FaChartLine, FaRankingStar } from "react-icons/fa6";

const Feature = ({ title, reason, price, features, isMain }) => {
  return (
    <div className={`feature_card ${isMain ? "main-card" : ""}`}>
      <div className="card-icon">
        {isMain ? (
          <img
            className="puzzle_icon"
            src={Puzzle}
            alt="Puzzle"
            loading="lazy"
          />
        ) : title === "Global CO₂ Ranking" ? (
          <FaRankingStar />
        ) : (
          <FaChartLine />
        )}
      </div>
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-reason">{reason}</p>
      </div>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`feature ${
              feature.included ? "included" : "not-included"
            }`}
          >
            {feature.included ? "✔" : "✘"} {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feature;
