const mysql = require('mysql')
const database = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'XXXX', //mettre le mot de passe de session
  database: 'christmas'
})

module.exports = database

