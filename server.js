require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const env = {
    PORT: process.env.PORT || 3000,
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
}

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hej")
})

app.listen(env.PORT, () => {
    console.log(`Server has started on port: ${env.PORT}`)
})