import "./hero.css";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero Section for Greener Web">
      {/* Real DOM image for LCP with responsive source switching */}
      <picture className="hero_img">
        <source
          srcSet={require("../../assets/hero_leaf_2.webp")}
          media="(min-width: 1024px)"
          type="image/webp"
        />
        <img
          src={require("../../assets/hero_leaf_square.webp")}
          alt="Green leaves abstract background"
          fetchpriority="high"
          decoding="async"
          width="1216"
          height="1024"
          className="hero_img_element"
        />
      </picture>

      <div className="hero_wrapper">
        <h3 className="hero_title" id="hero-title">
          Building a Greener Web
        </h3>
        <p className="hero_subtitle" aria-labelledby="hero-title">
          Sustainability meets performance
        </p>
        <p className="hero_subtitle">
          Learn how to create an eco-friendly digital experience.
        </p>
        <div className="hero_cta">
          <Button
            className="hero_cta_button"
            text="Explore"
            aria-label="Explore eco-friendly web practices"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
