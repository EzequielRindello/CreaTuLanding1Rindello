import React from "react";
import "../estilos/Navbar.css"

const CartWidget = () => {
  return (
    <div className="cart-container">
      <span className="cart-icon">🛒</span>
      <div className="cart-items">3</div>
    </div>
  );
};

export default CartWidget;
