import Logo from "../../assets/icons/leaf.svg";
import "./nav.css";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200%" }}>
      <nav className="navbar">
        <a href="#">
          <img className="logo" alt="logo" src={Logo} loading="lazy" />
        </a>

        <div className="nav-links">
          {/* eslint-disable-next-line */}
          <a className="nav_link_item" href="#">
            Home
          </a>
          {/* eslint-disable-next-line */}
          <a className="nav_link_item" href="#">
            About
          </a>
          {/* eslint-disable-next-line */}
          <a className="nav_link_item" href="#">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
