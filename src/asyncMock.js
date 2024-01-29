const products = {
    "relojes": [
        {
            "id": "GA1",
            "price": 1200,
            "category": "GA",
            "img": "ga1.jpg",
            "stock": 50,
            "description": "Casio G-Shock GA Series - Model 1"
        },
        {
            "id": "GA2",
            "price": 1100,
            "category": "GA",
            "img": "ga2.jpg",
            "stock": 60,
            "description": "Casio G-Shock GA Series - Model 2"
        },
        {
            "id": "GMA1",
            "price": 1300,
            "category": "GMA",
            "img": "gma1.jpg",
            "stock": 45,
            "description": "Casio G-Shock GMA Series - Model 1"
        },
        {
            "id": "GMA2",
            "price": 1250,
            "category": "GMA",
            "img": "gma2.jpg",
            "stock": 55,
            "description": "Casio G-Shock GMA Series - Model 2"
        },
        {
            "id": "GMD1",
            "price": 1100,
            "category": "GMD",
            "img": "gmd1.jpg",
            "stock": 65,
            "description": "Casio G-Shock GMD Series - Model 1"
        },
        {
            "id": "GMD2",
            "price": 1050,
            "category": "GMD",
            "img": "gmd2.jpg",
            "stock": 70,
            "description": "Casio G-Shock GMD Series - Model 2"
        },
        {
            "id": "GMW1",
            "price": 1400,
            "category": "GMW",
            "img": "gmw1.jpg",
            "stock": 40,
            "description": "Casio G-Shock GMW Series - Model 1"
        },
        {
            "id": "GMW2",
            "price": 1350,
            "category": "GMW",
            "img": "gmw2.jpg",
            "stock": 48,
            "description": "Casio G-Shock GMW Series - Model 2"
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