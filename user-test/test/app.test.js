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

    describe.skip('GET /hello', () => {
        it('should return hello message', async () => {
            const res = await request(app).get('/');
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property('message', 'Hello, world!');
        });
    });

    describe('POST /users', () => {
        it('should create new user', async () => {
            const userPayload = {
                name: 'akshada11',
                email: 'test11@gmail.com'
            };
            const res = await request(app).post('/users').send(userPayload);
            console.log(res.body);
            expect(res.status).to.equal(201);
            // expect(res.body).to.include(userPayload);
            // expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('name', userPayload.name);
        })
        it('it should return 400 if name or email is missing', async() => {
            const res = await request(app).post('/users').send({name: 'bob'});
                expect(res.body).to.have.property('error');
            });
        });
    })



