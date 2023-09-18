import productsMock from "./products.mock"

const returnAllOrders = [
  {
    id: 3,
    userId: 2,
    productIds: [ 5 ]
  }
]

const returnAllOrdersWithoutProductIds = [
  {
    id: 3,
    userId: 2,
  }
]

const returnOk = [
  {
    "id": 3,
    "userId": 2,
    "productIds": [
      productsMock.returnNewProduct
    ]
  }
]

export default {
  returnAllOrders,
  returnOk,
  returnAllOrdersWithoutProductIds,
}