const mysql = require('mysql')
const database = mysql.createConnection({
  host: 'localhost',
  user: 'noroot',
  password: 'password',
  database: 'christmas'
})
module.exports = database