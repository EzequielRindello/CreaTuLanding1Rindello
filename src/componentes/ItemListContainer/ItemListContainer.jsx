import "./ItemListContainer.css";
// import { useState, useEffect } from "react";
// import {getProducts} from "../../asyncMock.js"

const ItemListContainer = ({ texto }) => {
  //  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProducts()
  //     .then((response) => {
  //       setProducts(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="list-container">
      <h2>{texto}</h2>
    </div>
  );
};

export default ItemListContainer;
