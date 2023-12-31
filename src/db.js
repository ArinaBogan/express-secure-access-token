const { Pool } = require('pg');

const pool = new Pool({
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER
})

module.exports = pool