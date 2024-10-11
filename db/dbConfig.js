const sqlite3 = require('sqlite3').verbose();

var dbConnect = (path) => { return new sqlite3.Database(path, (err) => { err && console.log(err) }); }

exports.dbConnect = dbConnect;