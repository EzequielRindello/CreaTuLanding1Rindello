import casio1 from "./imagenes/casio1.avif"
import casio2 from "./imagenes/casio2.avif"
import pro1 from "./imagenes/pro1.avif"
import pro2 from "./imagenes/pro2.png"
import gshock1 from "./imagenes/g1.avif"
import gshock2 from "./imagenes/g2.avif"

const products = {
  "relojes": [
    {
      "id": "GA1",
      "price": 1200,
      "category": "ga",
      "img": gshock1,
      "stock": 50,
      "description": "Casio G-Shock GA Series - Model 1"
    },
    {
      "id": "GA2",
      "price": 1100,
      "category": "ga",
      "img": gshock2,
      "stock": 60,
      "description": "Casio G-Shock GA Series - Model 2"
    },
    {
      "id": "PT1",
      "price": 1400,
      "category": "pro",
      "img": pro1,
      "stock": 40,
      "description": "Pro Trek Series - Model 1"
    },
    {
      "id": "PT2",
      "price": 1350,
      "category": "PT",
      "img": pro2,
      "stock": 48,
      "description": "Pro Trek Series - Model 2"
    },
    {
      "id": "C1",
      "price": 900,
      "category": "casio",
      "img": casio1,
      "stock": 40,
      "description": "Casio Series - Model 1"
    },
    {
      "id": "C2",
      "price": 788,
      "category": "casio",
      "img": casio2,
      "stock": 48,
      "description": "Casio Series - Model 2"
    }
  ]
}

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
    resolve(products.filter(prod => prod.category === categoryId));
  });
};
