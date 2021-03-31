'use strict';

require('dotenv').config();
const { server } = require('../src/server.js');
const superGoose = require('@code-fellows/supergoose');
const superTest = require('supertest');
// jest.setTimeout(1000);




const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const request = superGoose(server);

let id;

describe('===============CLOTHES API TEST===============', () => {
    it('should be able to create a cloth on POST /clothes', async () => {
        const obj = {
            name: 'test',
            type: 'test'
        };

        const response = await request.post('/api/v2/clothes/').send(obj);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('test');
        id = response.body._id;
    });

    it('should be able to update a cloth on PUT /clothes', async () => {
        const response = await request.put(`/api/v2/clothes/${id}`).send({
            name: 'test',
            type: 'test'
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
    });

    it('should be able to get a cloth on Get /clothes/:id', async () => {
        const response = await request.get(`/api/v2/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
    });

    it('should be able to get a cloth on DELETE /clothes/:id', async () => {
        const response = await request.delete(`/api/v2/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual(undefined);
    });
});

describe('===============FOODS API TEST===============', () => {
    it('should be able to create a food on POST /foods', async () => {
        const obj = {
            name: 'test',
            quantity: '1'
        };

        afterAll(() => {
            app.close();
        })

        const response = await request.post('/api/v2/foods/').send(obj);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('test');
        id = response.body._id;
    });

    it('should be able to update a food on PUT /foods', async () => {
        const response = await request.put(`/api/v2/foods//${id}`).send({
            name: 'test',
            quantity: '1'
        });

        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
    });

    it('should be able to get a food on Get /foods/:id', async () => {
        const response = await request.get(`/api/v2/foods/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual('test');
        done();
    });

    it('should be able to get a food on DELETE /foods/:id', async () => {
        const response = await request.delete(`/api/v2/foods/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual(undefined);
    });

    // it("should return 404", async (done) => {
    //     const res = await request.get("/").expect(404).end(done);
    // });
});