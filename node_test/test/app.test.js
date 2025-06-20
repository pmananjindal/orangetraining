const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
describe.skip('GET /hello', () => {
    it('should return Hello, world! message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('message', 'Hello, world!');
    });
});

describe('POST /users', () => {
    it('should create a new user', async () => {
        const userPayload = {
            name:'John Doe',
            email:'john@gmail'
        };
        const res = await request(app).post('/users').send(userPayload);
        expect(res.status).to.equal(201);
        expect(res.body).to.include(userPayload);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', userPayload.name);
    }
    
    ),
    it('should create a new user', async () => {
        const userPayload = {
            name:'John Doe',
            email:'john@gmail'
        };
        const res = await request(app).post('/users').send(userPayload);
        expect(res.status).to.equal(400);
        expect(res.body).to.include(userPayload);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', userPayload.name);
    }
    
    )
});