const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mysql = require('mysql')

app.post('/', (req, res) => {
  res.send('All is correct');
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
