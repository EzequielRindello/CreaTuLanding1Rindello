import React from "react";
import "../Navbar/Navbar.css"

const CartWidget = () => {
  return (
    <div className="cart-container">
      <span className="cart-icon">🛒</span>
      <div className="cart-items">0</div>
    </div>
  );
};

export default CartWidget;
