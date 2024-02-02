// ItemListContainer.js
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect} from "react";
import { getProductByCategory, getProducts } from "../../asyncMock.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFuntion = categoryId ? getProductByCategory : getProducts;

    asyncFuntion(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error();
      });
  },[categoryId]);

  return (
    <div className="list-container">
      <h2>Nuestros productos</h2>
      <ItemList products={products}></ItemList>
    </div>
  );
};

export default ItemListContainer;
