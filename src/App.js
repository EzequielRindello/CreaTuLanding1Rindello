import "./App.css";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "./index"

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const collectionRef = collection(db, "items");
      const q = query(collectionRef,
        where("price", ">", 100),
        limit(6)
      );

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const productsList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setProducts(productsList);
          console.log(productsList);
        } else {
          console.warn("No items found");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Hero alt="casio banner" />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
