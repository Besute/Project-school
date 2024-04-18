function pull(name, email, telephone, direction) {
    const mysql = require('mysql')
    const connection = mysql.createConnection( {
        host: 'localhost',
        password: 'secret',
        database: 'school',
        user: 'master'
    })
    connection.connect();

    connection.query(`INSERT INTO users (name, email, telephone, direction) VALUES ("${name}", "${email}", "${telephone}", "${direction}")`)
    connection.end();
}

// pull(name, email, `${telephone}`, direction)

exports.pull = pull 