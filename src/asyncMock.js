const products = {
    "relojes": [
        {
          "id": "GA1",
          "price": 1200,
          "category": "GA",
          "img": "imagenes/g1.avif",
          "stock": 50,
          "description": "Casio G-Shock GA Series - Model 1"
        },
        {
          "id": "GA2",
          "price": 1100,
          "category": "GA",
          "img": "imagenes/g2.avif",
          "stock": 60,
          "description": "Casio G-Shock GA Series - Model 2"
        },
        {
          "id": "PT1",
          "price": 1400,
          "category": "PT",
          "img": "imagenes/pro1.avif",
          "stock": 40,
          "description": "Pro Trek Series - Model 1"
        },
        {
          "id": "PT2",
          "price": 1350,
          "category": "PT",
          "img": "imagenes/pro2.avif",
          "stock": 48,
          "description": "Pro Trek Series - Model 2"
        },
        {
          "id": "C1",
          "price": 900,
          "category": "CASIO",
          "img": "imagenes/casio1.avif",
          "stock": 40,
          "description": "Casio Series - Model 1"
        },
        {
          "id": "C2",
          "price": 788,
          "category": "CASIO",
          "img": "imagenes/casio2.avif",
          "stock": 48,
          "description": "Casio Series - Model 2"
        }
      ]
}




export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id === productId))
    })
}