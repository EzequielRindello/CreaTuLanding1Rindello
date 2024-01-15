
import './App.css';
// import Hero from './componentes/Hero';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/Navbar/Navbar';
import Hero from './componentes/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        alt="casio banner" />
      <ItemListContainer
        texto="Nuestros productos"
      />
    </div>
  );
}

export default App;
