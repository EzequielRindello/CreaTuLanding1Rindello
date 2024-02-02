import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import casioLogo from "../../imagenes/casio-logo.webp";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <img src={casioLogo} alt="Logo" className="logo" />
        </Link>
        <div className="categorias"> 
          <NavLink to={`category/ga`} className={({isActive}) => isActive ? "activate-option": "option"}>G-shock</NavLink>
          <NavLink to={`category/pro`} className={({isActive}) => isActive ? "activate-option": "option"}>Pro trek</NavLink>
          <NavLink to={`category/casio`} className={({isActive}) => isActive ? "activate-option": "option"}>Casio</NavLink>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
