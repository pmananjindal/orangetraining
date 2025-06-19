const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
describe('GET /hello', () => {
    it('should return Hello, world! message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('message', 'Hello, world!');
    });
});