import express from 'express';
import products from './controller/product.controller';

const app = express();

app.use(express.json());

app.post('/products', products.createNewProduct);

export default app;
