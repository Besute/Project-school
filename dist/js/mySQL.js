const express = require("express");
const app = express();
const parser = require("body-parser");
// const mysql = require('mysql')
console.log("mySQL");
app.use(parser.json());

app.post("/", (req, res) => {
  // const connection = mysql.createConnection({
  //     host: 'localhost',
  //     password: 'secret',
  //     database: 'school',
  //     user: 'master'
  // })
  // connection.connect();
  res.json(req.body);

  // connection.query(`INSERT INTO users (name, email, telephone, direction) VALUES ("${name}", "${email}", "${telephone}", "${direction}")`)
  // connection.end();
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
