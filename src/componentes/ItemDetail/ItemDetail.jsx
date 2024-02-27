import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar los elementos del carrito desde localStorage al montar el componente
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Guardar los elementos del carrito en localStorage cada vez que cambian
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (quantity, name, price, id) => {
    const newItem = { id, name, price, quantity };

    const isItemInCart = cartItems.some((item) => item.id === id);

    if (isItemInCart) {
      alert("Este producto ya está en el carrito.");
    } else {
      setCartItems([...cartItems, newItem]);
      console.log("Producto agregado al carrito:", newItem);
    }
  };

  return (
    <article className="article-card-item">
      <header className="header">
        <h2 className="item-header">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={description} className="item-img" />
      </picture>
      <section>
        <p className="info">Categoría: {category}</p>
        <p className="info">
          <strong>{description}</strong>
        </p>
        <p className="info">Precio: {price}</p>
      </section>
      <footer className="item-footer">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => addToCart(quantity, name, price, id)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
