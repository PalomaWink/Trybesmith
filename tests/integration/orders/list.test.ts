import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
/* import OrderModel from '../../../src/database/models/order.model';
import order from '../../mocks/order.mock';
import app from '../../../src/app'
 */

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  /* it('verifica /orders', async function() {
    const productInstance = OrderModel.build(order.test)
    const test = productInstance.map((order) => order.dataValues)
    sinon.stub(OrderModel, 'findAll').resolves(test)

    const response = await chai.request(app)
      .get('/orders');

    console.log(response.body);
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(productInstance);
  }) */
});
