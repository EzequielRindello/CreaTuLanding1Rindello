// ItemListContainer.js
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import productos from "../../relojes.json";

const ItemListContainer = () => {
  const [relojes, setRelojes] = useState([]);

  const fetchData = () =>
    new Promise((resolve, reject) => {
      resolve(productos.relojes);
    });
  useEffect(() => {
    fetchData()
      .then((res) => setRelojes(res))
      .catch((err) => console.error(err));
  }, []);

  // logica para obtener mediante useParams() si existe tal categoria que muestre la lista filtrada

  return (
    <div className="list-container">
      <h2>Nuestros productos</h2>
      <ItemList products={relojes}></ItemList>
    </div>
  );
};

export default ItemListContainer;
