const { Pool } = require('pg');

const pool = new Pool({
   host: 'localhost',
   user: 'postgres',
   password: '123456',
    port: '5432',
    database:'demo'
});

module.exports = {
    pool
}