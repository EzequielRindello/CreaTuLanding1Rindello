// CartWidget.js
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useCart } from "../Context/CartContext.jsx";

const CartWidget = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <Link to="/carrito" className="cart-icon">
        🛒
      </Link>
      <div className="cart-items">{cartCount}</div>
    </div>
  );
};

export default CartWidget;
