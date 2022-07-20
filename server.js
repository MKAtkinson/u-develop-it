const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const mysql = require('mysql2')
app.use(express.urlencoded ({ extended: false}))
app.use (express.json())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ThePacket145!',
        database: 'election'
    },
    console.log('Connected to election database.')
);

db.query(`SELECT * FROM candidates`, (err,rows) => {
    console.log(rows);
})

app.get((req,res) => {
    res.status(404).end()
})


app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})