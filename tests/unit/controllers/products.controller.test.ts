import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import createProduct from '../../../src/service/product.service';
import newProduct from '../../../src/controller/product.controller';
import product from '../../mocks/products.mock';


chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {
    body: {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }
  } as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Verifica se retorna o objeto corretamente ao cadastrar um produto', async function() {
    sinon.stub(createProduct, 'createProduct').resolves(product.newProduct);

    await newProduct.createNewProduct(req, res)
    expect(res.status).to.have.been.calledWith(201);
  })
});
