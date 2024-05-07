import React, {useState} from "react";
import "./appBar.css";
import Button from "./button";

import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

function AppBar() {
  const [aboutMe, setAboutMe] = useState(false);
  const [language, setLanguage] = useState(false);

  const handleAbout = () => {
    setAboutMe(!aboutMe);
  }; 
  
  const handleLanguage = () => {
    setLanguage(!language);
  }; 

  return (
    <header className="app-bar">
      <div className="title">
        <span>Portafolio</span>
      </div>
      <div className="menu">
        <Button className = "appbar-button" onClick = {handleAbout}>
          About Me
          {aboutMe ? (
            <IoChevronUpSharp className="rotate-arrow rotated" />
          ) : (
            <IoChevronDownSharp className="rotate-arrow" />
          )}
          </Button>
        <Button className = "appbar-button" onClick = {handleLanguage}>
          Language
          {language ? (
            <IoChevronUpSharp className="rotate-arrow rotated" />
          ) : (
            <IoChevronDownSharp className="rotate-arrow" />
          )}
          </Button>
      </div>
    </header>
  );
}

export default AppBar;
