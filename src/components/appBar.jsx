import React from "react";
import "./appBar.css";
import Button from "./button";

function AppBar() {
  return (
    <header className="app-bar">
      <div className="title">
        <span>Portafolio</span>
      </div>
      <div className="menu">
        <Button>Opción 1</Button>
        <Button>Opción 2</Button>
        <Button>Opción 3</Button>
      </div>
    </header>
  );
}

export default AppBar;
