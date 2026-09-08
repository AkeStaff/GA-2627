const mongoose = require('mongoose')

async function connectDB(DATABASE_URI) {
    await mongoose.connect(DATABASE_URI)
    mongoose.connection
        .on("open", () => console.log("mongoose is connected"))
        .on("close", () => console.log("mongoose is disconnected"))
        .on("error", (error) => console.log(error))
}

module.exports = connectDB