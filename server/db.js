const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "bg121902",
    host: "localhost",
    port: 5432,
    database: "yachartDB"
})

module.exports = pool;