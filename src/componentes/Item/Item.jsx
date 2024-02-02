import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ id, description, price, stock, image }) => {
  return (
    <article className="card-item">
      <header className="header">
        <h4>{description}</h4>
      </header>
      <picture>
        <img src={image} alt={description} className="item-img" />
      </picture>
      <section>
        <p className="info">Precio: {price}</p>
        <p className="info">Stock: {stock}</p>
      </section>
      <footer className="item-footer">
        <Link to={`/item/${id}`} className="option">Detalles</Link>
      </footer>
    </article>
  );
};

export default Item;
