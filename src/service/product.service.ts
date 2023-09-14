import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (product: Product): Promise<ProductInputtableTypes> => {
  const products = await ProductModel.create(product);
  return products.toJSON();
};

const getAllProducts = async (): Promise<Product[]> => {
  const allProducts = await ProductModel.findAll();
  return allProducts.map((products) => products.toJSON());
};

export default { createProduct, getAllProducts };