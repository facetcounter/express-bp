const express = require('express');
const { dbConnect } = require('./db/dbConfig');
const app = express();
const port = 3000;

var db = dbConnect('./db/db.sqlite');
app.get('/', (req, res) => {
    db.run("update accessCount set count = count + 1 where id=1", (err) => { err && console.log(err); });
    db.get("select count from accessCount where id=1", (err, row) => {
        res.send(`Hello World: ${row.count}`);
    });
});

app.listen(port, () => {

    console.log(`Server listening on port ${port}`);
});


module.exports = app;