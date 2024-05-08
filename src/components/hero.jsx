import { PiArrowRightLight } from "react-icons/pi";
import astronaut from "../assets/images/astronaut.svg";
import Button from "./button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-logo">
        <img src={astronaut} alt="astronaut" className="astronaut" />
      </div>
      <div className="hero-text">
        <h1>Web & Software Developer</h1>
        <p>Developer</p>
        <Button className="custom-button">
          Contact Me
          <PiArrowRightLight />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
