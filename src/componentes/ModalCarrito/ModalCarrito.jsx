import { React, useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../index.js";

const ModalCarrito = () => {
  const db = getFirestore(app);

  const addToCart = async (cartItems) => {
    try {
      // Crear un nuevo documento en la colección "orders"
      const docRef = await addDoc(collection(db, "orders"), {
        itemName: cartItems.name,
        itemCategory: cartItems.category,
        itemPrice: cartItems.price,
        quantity: cartItems.quantity,
      });
      alert(`Elementos agregados: ${cartItems.quantity} - ID de orden: ${docRef.id}`);
    } catch (error) {
      console.error("Error al agregar la orden: ", error);
      alert(
        "Ocurrió un error al agregar la orden. Por favor, inténtalo de nuevo."
      );
    }
  };
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar los elementos del carrito desde localStorage al montar el componente
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>Nombre: {item.name}</p>
            <p>Categoría: {item.category}</p>
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        ))
      )}
      <button>Confirmar pedido</button>
    </div>
  );
};

export default ModalCarrito;
