const express = require("express")
const app = express()
require("dotenv").config()
const routes = require("./routes/blogRoutes")
const dbConnect = require("./config/database")
const PORT = process.env.PORT_URL || 8085

app.use(express.json())

// app.use("/api/v1",routes)

// app.get("/getData",(req,res)=>{
//     res.send("All data fetched")
// })

app.use("/api/v1",routes)


app.listen(PORT,()=>{
    console.log(`Server started running at Port ${PORT}`)
})

dbConnect()