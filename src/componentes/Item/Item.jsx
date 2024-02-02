import React from "react";

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
        <button className="option">ver detalle</button>
      </footer>
    </article>
  );
};

export default Item;
