const request = require("supertest")
const app = require("./index")

describe("GET /", () => {
    it("should return hello", async () => {
        return request(app)
            .get("/")
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});

