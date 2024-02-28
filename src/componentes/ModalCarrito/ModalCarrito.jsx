import { React, useEffect, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../index.js";
import Swal from "sweetalert2";
import "./ModalCarrito.css";

const ModalCarrito = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Cargar los elementos del carrito desde localStorage al montar el componente
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const confirmOrder = async () => {
    const confirmation = await Swal.fire({
      title: "Esta es la compra que buscas?",
      text: "Vas a generar una nueva orden, luego el carrito será vaciado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Comprar",
      cancelButtonText: "Cancelar",
    });

    if (confirmation.isConfirmed) {
      try {
        const db = getFirestore(app);
        const ordersCollectionRef = collection(db, "orders");

        const newOrder = {
          items: cartItems,
          timestamp: new Date(),
        };

        const docRef = await addDoc(ordersCollectionRef, newOrder);

        Swal.fire({
          title: "Éxito",
          text: `ID de orden: ${docRef.id}`,
          icon: "info",
        });
        setCartItems([]);
        localStorage.removeItem("cartItems");
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Algo inesperado ocurrió, inténtalo más tarde!`,
          icon: "error",
        });
      }
    }
  };

  const removeItem = (indexToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item, index) => index !== indexToRemove
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cartlist-container">
          <h2>Nada que mostrar aqui</h2>
          <p>No hay productos en el carrito</p>
        </div>
      ) : (
        <div className="cartlist-container">
          <h2>Carrito de Compras</h2>
          {cartItems.map((item, index) => (
            <div className="item" key={index}>
              <p>Nombre: {item.name}</p>
              <p>Precio: {item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <br></br>
              <button className="btn" onClick={() => removeItem(index)}>
                Eliminar item
              </button>
            </div>
          ))}
          <button className="btn-cart" onClick={confirmOrder}>
            Confirmar pedido
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalCarrito;
