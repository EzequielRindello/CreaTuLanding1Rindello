import React from "react";
import "../estilos/Navbar.css";
import CartWidget from "./CartWidget";
import casioLogo from "../imagenes/casio-logo.webp";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <img src={casioLogo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/g-shock">G-shock</a>
          </li>
          <li>
            <a href="/pro-trek">Pro trek</a>
          </li>
          <li>
            <a href="/casio">Casio</a>
          </li>
        </ul>
        <div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
