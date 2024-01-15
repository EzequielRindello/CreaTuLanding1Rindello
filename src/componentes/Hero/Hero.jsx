import React from "react";
import "./Hero.css";
import url from "../../imagenes/casio-banner.webp";

const Hero = ({ alt }) => {
  return (
    <div className="hero">
      <img src={url} alt={alt} className="responsive-image" />
    </div>
  );
};

export default Hero;
