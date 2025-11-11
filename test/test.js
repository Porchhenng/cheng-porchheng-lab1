import { expect } from 'chai';
import request from 'supertest';

import app from '../app.js'; 

describe('GET /', () => {
    it('TESTING WORK FLOW TRIGGER', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('TESTING WORK FLOW TRIGGER');
    });
});