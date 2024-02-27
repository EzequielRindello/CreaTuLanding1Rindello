import casio1 from "./imagenes/casio1.png"
import casio2 from "./imagenes/casio2.avif"
import pro1 from "./imagenes/pro1.avif"
import pro2 from "./imagenes/pro2.png"
import gshock1 from "./imagenes/g1.avif"
import gshock2 from "./imagenes/g2.avif"
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBtt19Ulc66vZ_sjNBO4kJrtmu_O4ySLeA",
  authDomain: "coderhuse-ecomerce.firebaseapp.com",
  projectId: "coderhuse-ecomerce",
  storageBucket: "coderhuse-ecomerce.appspot.com",
  messagingSenderId: "31252720792",
  appId: "1:31252720792:web:583c5056c503e49e26b4ed",
  measurementId: "G-0GE93S716H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = {
  "relojes": [
    {
      "id": "GA1",
      "name": "G-Shock Thunderbolt",
      "price": 1200,
      "category": "ga",
      "img": gshock1,
      "stock": 50,
      "description": "Impresiona con el poderoso Casio G-Shock Thunderbolt GA Series - Model 1. Este reloj no solo te mantiene a tiempo, sino que también te brinda una resistencia inquebrantable y un estilo imponente."
    },
    {
      "id": "GA2",
      "name": "G-Shock Tempest",
      "price": 1100,
      "category": "ga",
      "img": gshock2,
      "stock": 60,
      "description": "Domina el terreno con el Casio G-Shock Tempest GA Series - Model 2. Diseñado para aventureros intrépidos, este reloj combina durabilidad, funcionalidad y estilo en una unidad formidable."
    },
    {
      "id": "PT1",
      "name": "Pro Trek Explorer",
      "price": 1199,
      "category": "pro",
      "img": pro1,
      "stock": 40,
      "description": "Descubre nuevos horizontes con el Pro Trek Explorer Series - Model 1. Equipado con características avanzadas y una construcción robusta, este reloj es el compañero perfecto para tus expediciones al aire libre."
    },
    {
      "id": "PT2",
      "name": "Pro Trek Summit",
      "price": 1350,
      "category": "pro",
      "img": pro2,
      "stock": 48,
      "description": "Alcanza nuevas alturas con el Pro Trek Summit Series - Model 2. Diseñado para enfrentar los desafíos más difíciles de la naturaleza, este reloj te proporciona las herramientas necesarias para conquistar las cumbres más altas."
    },
    {
      "id": "C1",
      "name": "Casio Classic",
      "price": 200,
      "category": "casio",
      "img": casio1,
      "stock": 40,
      "description": "Regresa a lo básico con el Casio Classic Series - Model 1. Este reloj atemporal combina la simplicidad con la funcionalidad, ofreciéndote una experiencia confiable y sin complicaciones."
    },
    {
      "id": "C2",
      "name": "Casio Vanguard",
      "price": 999,
      "category": "casio",
      "img": casio2,
      "stock": 48,
      "description": "Destaca en cualquier situación con el Casio Vanguard Series - Model 2. Con su diseño elegante y características innovadoras, este reloj te brinda un estilo distintivo y un rendimiento excepcional."
    }
  ]
}


const collectionRef = collection(db, "items");

const checkCollection = async () => {
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.empty) {
    console.log("La colección 'items' está vacía. Cargando datos...");
    loadProducts();
  } else {
    return;
  }
};

const loadProducts = () => {
  products.relojes.forEach(reloj => {
    const docRef = doc(collectionRef, reloj.id); 
    setDoc(docRef, reloj)
      .then(() => console.log(`Reloj con ID ${reloj.id} agregado a Firestore.`))
      .catch(error => console.error(`Error al agregar el reloj con ID ${reloj.id}:`, error));
  });
};


checkCollection();

export const getProducts = () => {
  return new Promise((resolve) => {
    const resolvedProducts = products.relojes;
    if (Array.isArray(resolvedProducts)) {
      resolve(resolvedProducts);
    } else {
      console.error("Products is not an array:", resolvedProducts);
      resolve([]);
    }
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    resolve(products.relojes.find(prod => prod.id === productId));
  });
}

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    const filteredProducts = products.relojes.filter(prod => prod.category === categoryId);
    resolve(filteredProducts);
  });
};
