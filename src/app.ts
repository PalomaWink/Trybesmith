import express from 'express';
import products from './controller/product.controller';
import orders from './controller/orders.controller';

const app = express();

app.use(express.json());

app.post('/products', products.createNewProduct);
app.get('/products', products.getAll);

app.get('/orders', orders.allOrders);

app.post('/login');
export default app;
