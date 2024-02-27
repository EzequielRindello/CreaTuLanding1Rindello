import "./App.css";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Footer from "./componentes/Footer/Footer";

function App() {
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
