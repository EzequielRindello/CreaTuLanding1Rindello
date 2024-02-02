import React from "react";
import "./ItemDetailContainer.css";
import { getProductById } from "../../asyncMock.js";
import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  
  return (
    <div className="item-detail-cotainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
