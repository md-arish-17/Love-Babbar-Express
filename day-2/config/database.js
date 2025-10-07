const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("Database Connected successfully to the Express")})
    .catch((error)=>{
        console.log("Error Database did not connect")
        console.error(error.message)
        process.exit(1)
    })
}

module.exports = dbConnect