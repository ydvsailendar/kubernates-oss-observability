const database = require('./database.json');

const mysql = require('mysql');

module.exports = mysql.createConnection({
	host     : database.dev.host,
	user     : database.dev.user,
	password : database.dev.password,
	database : database.dev.database
});