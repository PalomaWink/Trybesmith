import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import product from '../../mocks/products.mock';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testando a rota de /products', async function () {
    // O productInstance faz o metodo build que retorna como se tivesse realmente ido no banco pegar a informacao, ele retorna o tipo Model<Product, ProductInputtableTypes>
    const productInstance = ProductModel.bulkBuild(product.returnAllProducts)
    sinon.stub(ProductModel, 'findAll').resolves(productInstance)

    const response = await chai.request(app)
      .get('/products');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(product.returnAllProducts);
  })
});
