import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const CartWidget = () => {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

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
