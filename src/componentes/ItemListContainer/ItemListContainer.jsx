import React, { useState, useEffect } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock.js";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="list-container">
      <h1>Nuestros productos</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ItemList products={products}></ItemList>
      )}
    </div>
  );
};

export default ItemListContainer;
