
import './App.css';
// import Hero from './componentes/Hero';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <ItemListContainer
        texto="Nuestros productos"
      />
    </div>
  );
}

export default App;
