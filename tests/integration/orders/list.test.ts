import sinon from 'sinon';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import order from '../../mocks/order.mock';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';


chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('verifica /orders', async function() {
    const productInstance = OrderModel.bulkBuild(order.returnOk, {
      include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
    })
       
    sinon.stub(OrderModel, 'findAll').resolves(productInstance)

    const response = await chai.request(app)
      .get('/orders')
      .send();
 
    expect(response.status).to.equal(200);
    expect(response.body).to.be.deep.equal(order.returnAllOrders);
  })
});
