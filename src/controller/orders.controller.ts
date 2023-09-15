import { Request, Response } from 'express';
import orders from '../service/orders.service';

const allOrders = async (_req: Request, res: Response): Promise<Response> => {
  const result = await orders.getAllOrders();
  return res.status(200).json(result);
};

export default {
  allOrders,
};