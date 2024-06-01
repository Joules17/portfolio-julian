import { PiArrowRightLight } from "react-icons/pi";
import astronaut from "../assets/images/astronaut.svg";
import Button from "./button";
import "./hero.css";
import ParticlesStars from "./particlesStars";

const Hero = () => {
  return (
    <div className="hero-container ">
      <div id="particles-container" className="particles-container">
        <ParticlesStars />
      </div>
      <div className="hero">
        <div className="hero-logo">
          <img src={astronaut} alt="astronaut" className="astronaut" />
        </div>
        <div className="hero-text">
          <h1>Julián Andrés Salamanca Tellez</h1>
          <h2>
            Web & Software <span className="hero-gradient">DEV</span>
          </h2>
          <Button className="custom-button">
            Contact Me
            <PiArrowRightLight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
