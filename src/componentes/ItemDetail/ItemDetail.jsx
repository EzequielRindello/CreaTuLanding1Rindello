import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../index.js";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
  const db = getFirestore(app);

  const addToCart = async (quantity) => {
    try {
      // Crear un nuevo documento en la colección "orders"
      const docRef = await addDoc(collection(db, "orders"), {
        itemName: name,
        itemCategory: category,
        itemPrice: price,
        quantity: quantity,
      });
      alert(`Elementos agregados: ${quantity} - ID de orden: ${docRef.id}`);
    } catch (error) {
      console.error("Error al agregar la orden: ", error);
      alert(
        "Ocurrió un error al agregar la orden. Por favor, inténtalo de nuevo."
      );
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
        <p className="info">Categoria: {category}</p>
        <p className="info">
          <strong>{description}</strong>
        </p>
        <p className="info">Precio: {price}</p>
      </section>
      <footer className="item-footer">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => addToCart(quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
