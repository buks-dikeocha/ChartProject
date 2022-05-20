const express = require("express")
const cors = require("cors")
const compression = require("compression")
const bodyParser = require("body-parser")
const pool = require("./db")

const app = express()
app.use(express.json())
app.use(cors())
app.use(compression())
app.use(bodyParser.json())

const PORT = 5000

app.post("/newuser", async (req, res) => {
    try {
        const { first, last, email, username, password } = req.body
        
        let errors = {}
        // is email valid? is password valid?

        const existing = await pool.query(`
            SELECT * FROM users
            WHERE email = $1
        `, [email])

        if (existing.rows.length > 0) {
            errors.email = "Hold on there. That email is already in use!"
        }

        if (Object.keys(errors).length > 0) {
            return res.json(errors)
        }
        
        const encryptedPassword = password // encrypt 

        const newUser = await pool.query(`
            INSERT INTO users (first_name, last_name, email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [first, last, email, username, encryptedPassword])

        res.json(newUser.rows[0])        
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`opened server on port ${PORT}`)
})