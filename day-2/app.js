const express = require("express")
const app = express()
const dbConnect = require("./config/database")
require("dotenv").config()

app.use(express.json())

const PORT = process.env.PORT || 4000

app.use(express.json())

const todoRoutes = require("./routes/todos") 

app.use("/api/v1", todoRoutes)

app.listen(PORT,()=>{
    console.log(`Port Started Running at ${PORT}`)
})

dbConnect()

