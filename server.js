require('dotenv').config()
const connectDB = require('./config/connectDB')

const express = require('express')

const env = {
    PORT: process.env.PORT || 3000,
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
}

const app = express()
connectDB(env.DATABASE_URI)

app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hej")
})

app.listen(env.PORT, () => {
    console.log(`Server has started on port: ${env.PORT}`)
})