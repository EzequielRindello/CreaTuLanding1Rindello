
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import ComponentWithRouteParams from "./componentes/ComponentWithRouteParams/ComponentWithRouteParams"

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero
        alt="casio banner" />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="/user/:userId" element={<ComponentWithRouteParams />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>

    </div>
  );
}

export default App;
