import React from "react";
import "../estilos/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <img src="" alt="Logo" className="logo" />
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
