var mysql = require("mysql");
require('dotenv').config();



var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: process.env.password,
        database: "burgers_db",
    });
};


/*var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});*/

connection.connect(function(err) {
  if (err){
    console.log(err);
    return;
  }
  console.log("connected as: " + connection.threadId);
});

  // Export connection for our ORM to use.
  module.exports = connection;