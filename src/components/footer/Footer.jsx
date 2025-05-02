import React from "react";
import "./footer.css";
import Facebook from "../../assets/icons/facebook.svg";
import X from "../../assets/icons/x.svg";
import Instagram from "../../assets/icons/insta.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import { co2 } from "@tgwf/co2";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_section">
          <h2 className="footer_title">About</h2>
          <p>
            This website is part of my bachelor thesis, focusing on
            sustainability. This website is a practical example of a blog. It
            will be used for testing and applying sustainable methods for
            reducing carbon emission.
          </p>
        </div>
        <div className="footer_section links">
          <h2 className="footer_title">Quick Links</h2>
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Home</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">About</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Blog</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_section social">
          <h2 className="footer_title">Follow Us</h2>
          <div className="social_links">
            {/* eslint-disable-next-line */}
            <a href="https://www.facebook.com/?locale=de_DE">
              <img className="facebook_icon" src={Facebook} alt="facebook" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://x.com/?lang=de">
              <img className="x_icon" src={X} alt="X" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://www.instagram.com/">
              <img className="instagram_icon" src={Instagram} alt="instagram" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://at.linkedin.com/">
              <img className="linkedin_icon" src={Linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          &copy; {currentYear} Greener Web. All rights reserved by Boon-Chung
          Chi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
