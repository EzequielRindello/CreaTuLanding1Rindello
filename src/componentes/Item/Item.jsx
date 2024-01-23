import React from "react";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="card-item">
      <header className="header">
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-img" />
      </picture>
      <section>
        <p className="info">Precio: {price}</p>
        <p className="info">Stock: {stock}</p>
      </section>
      <footer className="item-footer">
        <button className="option">ver detalle</button>
      </footer>
    </article>
  );
};

export default Item;
