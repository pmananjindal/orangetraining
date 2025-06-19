const request = require('supertest');
const {expect} = require('chai');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const User = require('../models/userModel');


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

    beforeEach(async () => {
        await User.deleteMany({});
      });


describe.skip('GET /hello',()=>{

    it('should return hello world message', async () => {
        const res = await request(app).get('/');

        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("message","Hello, World!!");
    });

});

describe('POST /users', () => {
    
    it('should create a new user', async () => {
        const userPayload = {
            name:'John Doe',
            email:'john@gmail'
        };
        const res = await request(app).post('/users').send(userPayload);
        console.log(res);
        expect(res.status).to.equal(201);
        expect(res.body).to.include(userPayload);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('name', userPayload.name);
    });

    it('should return 400 if name or email is missing', async () => {
        const userPayload = {
            name:'John Doe'
        };
        const res = await request(app).post('/users').send(userPayload);
        // console.log(res);
        expect(res.status).to.equal(400);
        // expect(res.body).to.include(error);
        expect(res.body).to.have.property('error','Name and email are required.');
        // expect(res.body).to.have.property('name', userPayload.name);
    });

});

});