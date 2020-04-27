const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.user,
    password: dbConfig.PASSWORD,
    database: dbConfig.db
});

connection.connect(err =>{
    if(err) throw err;
    console.log('Database Connected...');
});

module.exports = connection;