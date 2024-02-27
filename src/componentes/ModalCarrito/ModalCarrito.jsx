import { React, useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../index.js";
import Swal from "sweetalert2";

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
      alert(
        `Elementos agregados: ${cartItems.quantity} - ID de orden: ${docRef.id}`
      );
      Swal.fire({
        title: "Éxito",
        text: `Elementos agregados: ${cartItems.quantity} - ID de orden: ${docRef.id}`,
        icon: "info",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Algo inesperado ocurrio, intentalo mas tarde!`,
        icon: "error",
      });
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
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
        ))
      )}
      {/* Pass a function reference to the onClick event handler */}
      <button onClick={() => addToCart(cartItems)}>Confirmar pedido</button>
    </div>
  );
};

export default ModalCarrito;
