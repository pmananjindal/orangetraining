/*const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
describe('GET /hello', () => {
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
        console.log("req.bosy");
        const res = await request(app).post('/users').send(userPayload);
        expect(res.status).to.equal(201);
        expect(res.body).to.include(userPayload);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name', userPayload.name);
    }
    )
    it('should return 400 if name or email is missing', async () => {
        const res = await request(app).post('/users').send({ name: 'Bob' });
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
      });
});*/

const request = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
//const User = require('../models/userModel');
let mongoServer;

describe('User API (MongoDB)', () => {
    before(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
      });
    
      after(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
      });
      describe.skip('GET /hello', () => {
        it('should return Hello, world! message', async () => {
          const res = await request(app).get('/');
          expect(res.status).to.equal(200);
          expect(res.body).to.have.property('message', 'Hello, world!');
        });
    });
    
    describe('POST /users/signup', () => {
        it('should create a new user', async () => {
            const userPayload = {
                name:'John Doe',
                email:'john1@gmail.com',
                password: 'password123'
            };
            const res = await request(app).post('/users/signup').send(userPayload);
            console.log(res.body);
            expect(res.status).to.equal(200);
            expect(res.body).to.include(userPayload);
        }
        )
        it('should return 400 if name, email & password is missing', async () => {
            const res = await request(app).post('/users').send({ name: 'Bob' });
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error');
          });
        it('should return 409 if Email already exists.', async () => {
            const res = await request(app).post('/users').send({ name: 'Bob', email:'john@gmail.com', password: 'password123' });
            expect(res.status).to.equal(409);
            expect(res.body).to.have.property('error');
          });
    });
    
    describe('POST /users/login', () => {
        it('should login an existing user', async () => {
            const userPayload = {
                email:'devika.awate@gmail.com',
                password: 'Devika@123'
            };
            await request(app).post('/users/login').send(userPayload);
            const res = await request(app).post('/users/login').send(userPayload);
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('token');
        }
        )
        it('should return 400 if email or password is missing', async () => {
            const res = await request(app).post('/users/login').send({ email: 'anjali.awate@gmail.com', password: '' });
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error');
        }
        );
        it('should return 401 if email or password is incorrect', async () => {
            const res = await request(app).post('/users/login').send({ email: 'anjali.awate@gmail.com', password: 'wrongpassword' });
            expect(res.status).to.equal(401);
            expect(res.body).to.have.property('error', 'Invalid password.');
        }
        );
        it('should return 404 if user not found', async () => {
            const res = await request(app).post('/users/login').send({ email: 'dummy@gmail.com', password: 'password123' });
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'User not found.');
        }
        );
    });

    describe('POST /users/logout', () => {
      const userPayload = {
                email:'anjali.awate@gmail.com',
                password: 'Anjali@123'
            };
        it('should logout an existing user', async () => {
            const loginRes = await request(app).post('/users/logout').send(userPayload);
            expect(loginRes.status).to.equal(200);
            expect(loginRes.body).to.have.property('message', 'Logout successful');
        }
        );
        it('should return 400 if no token provided', async () => {
            const res = await request(app).post('/users/logout').send({});
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error', 'No token provided.');
        }
        );
        it('should return 404 if token is invalid', async () => {
            const res = await request(app).post('/users/logout').send(userPayload);
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'User not found.');
        }
        );
    });

  });





 
