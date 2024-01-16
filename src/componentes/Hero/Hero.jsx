import React, { useState, useEffect } from "react";
import "./Hero.css";
import url from "../../imagenes/casio-banner.webp";
import urlMobile from "../../imagenes/casio-banner-mobile.jpg";

const Hero = ({ alt }) => {
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 840px)").matches) {
        // La pantalla es menor a 840px
        setCurrentUrl(urlMobile);
      } else {
        setCurrentUrl(url);
      }
    };

    // Agregar el evento de escucha al montar el componente
    window.addEventListener("resize", handleResize);

    // Verificar el tamaño de la pantalla al cargar el componente
    handleResize();

    // Eliminar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Sin dependencias, ya que no se utilizan en handleResize

  return (
    <div className="hero">
      <img src={currentUrl} alt={alt} className="responsive-image" />
    </div>
  );
};

export default Hero;
