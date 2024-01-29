import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="card-item">
      <header className="header">
        <h2 className="item-header">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-img" />
      </picture>
      <section>
        <p className="info">{category}</p>
        <p className="info">{description}</p>
        <p className="info">{price}</p>
      </section>
      <footer className="item-footer">
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada",quantity )}/>
      </footer>
    </article>
  );
};

export default ItemDetail;
