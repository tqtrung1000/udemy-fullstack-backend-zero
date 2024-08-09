require('dotenv').config()
const mysql = require('mysql2')

//create the connection to database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //default: 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, //default: empty
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

module.exports = connection;