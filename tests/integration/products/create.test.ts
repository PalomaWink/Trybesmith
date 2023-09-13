import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import product from '../../mocks/products.mock';
import app from '../../../src/app'
import Sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testando a rota de /products', async function () {
    // O productInstance faz o metodo build que retorna como se tivesse realmente ido no banco pegar a informacao, ele retorna o tipo Model<Product, ProductInputtableTypes>
    const productInstance = ProductModel.build(product.returnNewProduct)
    Sinon.stub(ProductModel, 'create').resolves(productInstance)

    const response = await chai.request(app)
      .post('/products')
      .send(product.newProduct);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.have.keys('id', 'name', 'price');
  })
});
