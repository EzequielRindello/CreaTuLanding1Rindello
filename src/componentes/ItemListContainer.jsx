import React from "react";
import "../estilos/ItemListContainer.css";

const ItemListContainer = ({ texto }) => {
  return (
    <div className="list-container">
      <h2>{texto}</h2>
    </div>
  );
};

export default ItemListContainer;
