import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { CartProvider } from "./componentes/Context/CartContext.jsx";


const firebaseConfig = {
  apiKey: "AIzaSyBtt19Ulc66vZ_sjNBO4kJrtmu_O4ySLeA",
  authDomain: "coderhuse-ecomerce.firebaseapp.com",
  projectId: "coderhuse-ecomerce",
  storageBucket: "coderhuse-ecomerce.appspot.com",
  messagingSenderId: "31252720792",
  appId: "1:31252720792:web:583c5056c503e49e26b4ed",
  measurementId: "G-0GE93S716H"
};

export const app = initializeApp(firebaseConfig);
export const data = getFirestore(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);


