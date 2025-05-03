import "./hero.css";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_wrapper">
        <h3 className="hero_title"> Building a Greener Web</h3>
        <p className="hero_subtitle"> Sustainability meets performance</p>
        <p className="hero_subtitle">
          Learn how to create an eco-friendly digital experience.
        </p>
        <div className="hero_cta">
          <Button className="hero_cta_button" text="Explore" link="#" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
