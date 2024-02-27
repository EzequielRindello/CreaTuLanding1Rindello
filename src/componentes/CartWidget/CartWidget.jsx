import React from "react";
import { Link } from "react-router-dom"; 
import "../Navbar/Navbar.css"

const CartWidget = () => {
  return (
    <div className="cart-container">
      <Link to="/carrito" className="cart-icon">🛒</Link>
      <div className="cart-items">0</div>
    </div>
  );
};

export default CartWidget;
