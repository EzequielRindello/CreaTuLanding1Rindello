import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import ModalCarrito from "./componentes/ModalCarrito/ModalCarrito"
import Hero from "./componentes/Hero/Hero";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      {location.pathname === "/" && <Hero alt="casio banner" />}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<ModalCarrito />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
