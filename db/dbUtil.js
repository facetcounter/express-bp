var { dbConnect } = require('./dbConfig');

var db = dbConnect('./db.sqlite');
console.log(db);
db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
    console.log(rows);
});

// db.run("create table accessCount (id integer primary key, count integer)", (err) => { err && console.log(err); });
// db.run("insert into accessCount (id,count) values (1,0)", (err) => { err && console.log(err); });
