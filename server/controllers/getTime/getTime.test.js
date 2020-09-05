const request = require('supertest');
const app = require('../../app');
const moment = require('moment');

describe("GET /time", () => {
    it("should return 403 status code when Authorization header is missing", async () => {
        const response = await request(app)
            .get('/time');

        expect(response.statusCode).toEqual(403);
        expect(response.text).toEqual(JSON.stringify({ message: "Not authorized" }));
    });
    it("should return 403 status code when Authorization header is incorrect", async () => {
        const response = await request(app)
            .get('/time')
            .set({
                "authorization": "verysecrettoken"
            });

        expect(response.statusCode).toEqual(403);
        expect(response.text).toEqual(JSON.stringify({ message: "Not authorized" }));
    });
    it("should return 200 status code with current server time when Authorization heade is passed", async () => {
        const response = await request(app)
            .get('/time')
            .set({
                "authorization": "mysecrettoken"
            });

        const result = JSON.parse(response.text);
        const mockResponse = {
            properties: {
                epoch: {
                    description: moment().unix(),
                    type: "number"
                }
            },
            required: ["epoch"],
            type: "object"
        };
        expect(response.statusCode).toEqual(200);
        expect(result).toMatchObject(mockResponse);
    });
});