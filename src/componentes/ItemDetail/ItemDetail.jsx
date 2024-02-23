import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  // implementar logica para el carrito

  return (
    <article className="article-card-item">
      <header className="header">
        <h2 className="item-header">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={description} className="item-img" />
      </picture>
      <section>
        <p className="info">Categoria: {category}</p>
        <p className="info"><strong>{description}</strong></p>
        <p className="info">Precio: {price}</p>
      </section>
      <footer className="item-footer">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => alert(`Elementos agregados: ${quantity} id: ${id}`)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
