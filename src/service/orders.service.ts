import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { OrderService } from '../types/Order';

const getAllOrders = async (): Promise<OrderService[]> => {
  const result = await OrderModel.findAll({ include: [
    { model: ProductModel, as: 'productIds', attributes: ['id'] },
  ] });
  console.log(result);
  
  const idsOrders = result.map((productId) => {
    const test = productId.toJSON();
    const returnAll = test.productIds?.map((id) => id.id);
    return { id: test.id, userId: test.userId, productIds: returnAll };
  });

  return idsOrders;
};

export default {
  getAllOrders,
};
