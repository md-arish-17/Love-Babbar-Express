const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database Connected Successfully at PORT")
    })
    .catch((error)=>{
        console.log(error)
        console.log("Error Occured database did not connect")
        process.exit(1)
    })
}

module.exports = dbConnect