const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'gama',
  port: 3306,
  database: 'dcc',
  user: 'avivaldo',
  password: '13222612@'
});

db.connect(console.log('db connect!'));


// db.end();

module.exports = db;