import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Retorna 400 ao não enviar username', async function () {
    const body = {
      password: '$2a$10$Y1x4uWZ/ykmyJpXd.pdiGe5B.IeDm0DYZjbpO3UicvV8EjqmvnnMC'
    }
    const response = await chai.request(app)
      .post('/login')
      .send(body);

    expect(response.status).to.equal(400);
    expect(response.body.message).to.be.equal('"username" and "password" are required')
  })
  it('Retorna 400 ao não enviar password', async function () {
    const body = {
      username: 'Hagar',
    }
    const response = await chai.request(app)
      .post('/login')
      .send(body);

    expect(response.status).to.equal(400);
    expect(response.body.message).to.be.equal('"username" and "password" are required')
  })
});
