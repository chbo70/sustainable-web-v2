import "./utils.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Arrow from "../../assets/icons/arrow.svg";

const Button = ({ className, link, text }) => {
  return (
    <a className={className} type="button" href={link || "#"}>
      {text}
      {/* <MdKeyboardArrowRight className="arrow_icon" /> */}
      <img src={Arrow} alt="arrow_icon" className="arrow_icon" />
    </a>
  );
};

export default Button;
