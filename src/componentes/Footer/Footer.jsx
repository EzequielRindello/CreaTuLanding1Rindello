import React from "react";
import "./Footer.css";
import casioLogo from "../../imagenes/casio-logo.webp";

const Footer = () => {
  let date = new Date().getFullYear().toString();
  return (
    <div className="footer-container">
      <div>
        <p>©EzequielRindello {date}</p>
      </div>
      <div>
        <img src={casioLogo} alt="Logo" className="logo" />
      </div>
      <div>
        <nav>
          <a href="https://ezequielrindello.github.io/Projets/">Portfolio</a>
          <a href="https://www.linkedin.com/in/ezequiel-rindello/">Linkedin</a>
          <a href="https://github.com/EzequielRindello">GitHub</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
