import { Request, RequestHandler, Response } from 'express';
import newProduct from '../service/product.service';

const createNewProduct: RequestHandler = async (req: Request, res: Response) => {
  const { id, name, price } = await newProduct.createProduct(req.body);
  return res.status(201).json({ id, name, price });
};

export default {
  createNewProduct,
};