const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '',
    user: '',
    password: '',
    database: '',
});

exports.pool = pool;
