import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, query, where, getDoc } from "firebase/firestore";

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

const collectionRef = collection(db, "items");

const checkCollection = async () => {
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot.empty) {
    console.log("La colección 'items' está vacía. Cargando datos...");
  } else {
    return;
  }
};

checkCollection();

export const getProducts = async () => {
  const products = [];
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach(doc => {
    products.push(doc.data());
  });
  return products;
};

export const getProductById = async (productId) => {
  const docRef = doc(collectionRef, productId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data(); // Retorna los datos si el documento existe
  } else {
    console.log("No se encontró ningún producto con el ID proporcionado.");
    return null; // Retorna null si el documento no existe
  }
};

export const getProductByCategory = async (categoryId) => {
  const querySnapshot = await getDocs(query(collectionRef, where("category", "==", categoryId)));
  const products = [];
  querySnapshot.forEach(doc => {
    products.push(doc.data());
  });
  return products;
};
