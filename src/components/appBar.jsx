import React, { useState } from "react";
import "./appBar.css";
import Button from "./button";

import { IoChevronDownSharp } from "react-icons/io5"; // Importa solo un icono

const AppBar = () => {
  const [aboutMe, setAboutMe] = useState(false);
  const [language, setLanguage] = useState(false);

  const handleAbout = () => {
    setAboutMe(!aboutMe);
    setLanguage(false);
  };

  const handleLanguage = () => {
    setLanguage(!language);
    setAboutMe(false);
  };

  return (
    <>
      <header className="app-bar">
        <div className="title">
          <span>Portfolio</span>
        </div>
        <div className="menu">
          <div className="menu">
            <Button
              className={`appbar-button ${aboutMe ? "clicked" : ""}`}
              onClick={handleAbout}
            >
              About Me
              <IoChevronDownSharp
                className={aboutMe ? "rotate-arrow rotated" : "rotate-arrow"}
              />
            </Button>
            <div className={`dropdown ${aboutMe ? "visible" : ""}`}>
              <Button className="appbar-button-menu">CV / Rezume </Button>
              <Button className="appbar-button-menu">Projects</Button>
              <span className="appbar-title"> Contact Me </span>
              <a
                href="https://www.linkedin.com/in/julian-andres-salamanca-tellez-a88230212/"
                target="_blank"
                rel="noopener noreferrer"
                className="appbar-button-menu"
              >
                LinkedIn
              </a>
              <Button className="appbar-button-menu">Projects</Button>
              <span style={{ marginBottom: "10px" }}></span>
            </div>
          </div>
          <div className="menu">
            <Button
              className={`appbar-button ${language ? "clicked" : ""}`}
              onClick={handleLanguage}
            >
              Language
              <IoChevronDownSharp
                className={language ? "rotate-arrow rotated" : "rotate-arrow"}
              />
            </Button>
            <div className={`dropdown ${language ? "visible" : ""}`}>
              <span>Opcion 1</span>
              <span>Opcion 1</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppBar;
