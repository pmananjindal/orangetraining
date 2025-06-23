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

    describe('GET users', () => {
        it('should return all users', async () => {
            await User.create({ email: 'alice@example.com', password: 'Alice123' });
            await User.create({ email: 'bob@example.com', password: 'Bob123' });
            const res = await request(app).get('/');
            expect(res.status).to.equal(200);
        });
    });

    describe('POST /auth', () => {
        it('should create a user with email and password', async () => {
            const res = await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
            expect(res.status).to.equal(201);
            expect(res.body).to.include({ email: 'alice@example.com', password: 'Alice123' });
        });

        it('should return 400 if email or password is missing', async () => {
            await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
            const res = await request(app).post('/auth').send({ email: 'alice@example.com' });
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error', 'email and password are required.');
        });

        it('should return 400 if email or password is missing', async () => {
            await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
            const res = await request(app).post('/auth').send({ password: 'Alice123' });
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error', 'email and password are required.');
        });

        // it('should return 409 if email already exists', async () => {
        //     await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
        //     const res1 = await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
        //     await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
        //     const res2 = await request(app).post('/auth').send({ email: 'alice@example.com', password: 'Alice123' });
            
        //     expect(res.status).to.equal(409);
        //     expect(res.body).to.have.property('error', 'Email already exists.');
        // });
    });
})



