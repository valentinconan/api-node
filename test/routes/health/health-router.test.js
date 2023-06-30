import supertest from 'supertest';
import Application from '../../../src/application.js';

describe('HealthRouter endpoint', () => {
    let app;
    beforeAll(() => {
        app = new Application().application;
    });

    it('should return status 200 on /api/info', async () => {
        const res = await supertest(app).get("/api/info");
        expect(res.statusCode).toBe(200);
    });
});