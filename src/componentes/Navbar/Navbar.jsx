import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import casioLogo from "../../imagenes/casio-logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <img src={casioLogo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/g-shock">G-shock</Link>
          </li>
          <li>
            <Link to="/pro-trek">Pro trek</Link>
          </li>
          <li>
            <Link to="/casio">Casio</Link>
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
