import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import product from '../../mocks/products.mock';
import createProduct from '../../../src/service/product.service';



describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testando a camada de service do /products', async function() {
    const productInstance = ProductModel.build(product.returnNewProduct);
    sinon.stub(ProductModel, 'create').resolves(productInstance);

    const result = await createProduct.createProduct(product.returnNewProduct);

    expect(result).to.have.keys('id', 'name', 'price', 'orderId');
  })

});
