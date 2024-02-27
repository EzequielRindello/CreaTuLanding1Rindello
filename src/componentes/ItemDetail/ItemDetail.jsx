import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useCart } from "../Context/CartContext.jsx";
import Swal from "sweetalert2";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    addToCart({ id, name, price, quantity });
    Swal.fire({
      title: "Éxito",
      text: `Agregaste ${name} a tu carrito`,
      icon: "success",
    });
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
        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
      </footer>
    </article>
  );
};

export default ItemDetail;
