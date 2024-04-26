const express = require("express"),
  app = express(),
  cors = require('cors'),
  mysql = require('mysql')
app.use(cors());
app.use(express.json());

app.post('/', (req) => {
  const {name, phone, email, direction} = req.body
  const connection = mysql.createConnection({
          host: 'localhost',
          password: 'secret',
          database: 'school',
          user: 'master'
      })
      connection.connect();
      connection.query(`INSERT INTO users (name, email, telephone, direction) VALUES ("${name}", "${email}", "${phone}", "${direction}")`)
      connection.end();
}) 

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
