import "./hero.css";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <section
      className="hero"
      role="region"
      aria-label="Hero Section for Greener Web"
    >
      <div className="hero_wrapper" id="her-title">
        <h1 className="hero_title"> Building a Greener Web</h1>
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
