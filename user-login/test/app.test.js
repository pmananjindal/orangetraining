const request = require('supertest');
const { expect } = require('chai');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const User = require('../models/userModel');
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

    beforeEach(async () => {
        await User.deleteMany({});
    });

    // describe.skip('GET /getuser', () => {
    //     it.skip('should return user details', async () => {
    //         await User.create({email: 'Alice@gmail.com', password: 'Welcome123'});
    //         await User.create({email: 'Bob@gmail.com', password: 'Welcome123'});

    //         const res = await request(app).get('/getuser');
    //         expect(res.status).to.equal(200);
    //         expect(res.body).to.be.an('array');
    //         // expect(res.body).to.have.property('message', 'Hello, world!');
    //         expect(res.body.length).to.equal(2);
    //     });
    // });

    describe('POST /auth/ signup', () => {
        it('should create new user', async () => {
            const userPayload = {
                email: 'test@gmail.com',
                password: 'Welcome@2025'
            };
            const res = await request(app).post('/auth/signup').send(userPayload);
            console.log(res.body);
            expect(res.status).to.equal(200);
            // expect(res.body).to.include(userPayload);
            // expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('email', userPayload.email);
        })
        // it('it should return 400 if email or password is missing', async() => {
        //     const res = await request(app).post('/auth/signup').send({email: 'test2206@gmail.com'});
        //         expect(res.body).to.have.property('error');
        //     });
        });
    })



