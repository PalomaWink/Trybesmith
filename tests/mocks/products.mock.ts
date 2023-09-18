const newProduct = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
};

const returnNewProduct = {
  id: 5,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
};

const returnClientNewProduct = {
  id: 5,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
}

const returnAllProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
    price: '30 peças de ouro',
    orderId: 4
  },
  {
    id: 2,
    name: "Pedra Filosofal",
    price: "20 gold",
    orderId: 3
  },
  {
    id: 3,
    name: "Lança do Destino",
    price: "100 diamond",
    orderId: 1
  }
];

export default {
  newProduct,
  returnNewProduct,
  returnClientNewProduct,
  returnAllProducts,
}