import "./utils.css";
import Arrow from "../../assets/icons/arrow.svg";

const Button = ({ className, link, text }) => {
  return (
    <a className={className} type="button" href={link}>
      {text}
      <img src={Arrow} alt="arrow_icon" className="arrow_icon" />
    </a>
  );
};

export default Button;
