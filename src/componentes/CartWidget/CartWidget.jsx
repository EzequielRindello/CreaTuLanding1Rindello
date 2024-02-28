import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import "../Navbar/Navbar.css";

const CartWidget = () => {
  const { cartItems } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

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
