var { dbConnect } = require('./dbConfig');

describe("test db connector", () => {
    it("should return a db handle", () => {
        var db = dbConnect('./db/db.sqlite');
        expect(db).toBeDefined();
    });
});