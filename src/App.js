import "./App.css";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { app } from "./index"
import Footer from "./componentes/Footer/Footer";

function App() {

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = getFirestore(app);
  //     const collectionRef = collection(db, "items");

  //     try {
  //       const querySnapshot = await getDocs(collectionRef);
  //       if (!querySnapshot.empty) {
  //         const productsList = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data()
  //         }))
  //         setProducts(productsList);
  //       } else {
  //         console.warn("No items found");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);


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
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
