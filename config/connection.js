var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err){
    console.log(err);
    return;
  }
  console.log("connected as: " + connection.threadId);
});

//heroku

/*if(process.env.????) {
  connection = mysql.createConneciton(process.env.???)
} else {*/

  // Export connection for our ORM to use.
  module.exports = connection;