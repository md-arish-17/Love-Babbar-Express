const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Love-Babbar-Backend")
.then(()=>{console.log("Code Successfully connected to the Database")})
.catch(()=>{console.log("Error code didnt connect to the database")})

app.use(bodyParser.json())

app.get("/getUserData",async(req,res)=>{
    const carsData = await userModel.find()
    res.json(carsData)
    res.send("All data of the users sent successfully")
})

app.post("/postData",(req,res)=>{
    const { name , brand } = req.body
    console.log(name)
    console.log(brand)
    res.send("Car Submitted Successfully")
})

app.listen(8082,()=>{
    console.log("Port Started Running at 8082")
})

const userSchema = new mongoose.Schema({
    name:String,
    brand:String
})

const userModel = mongoose.model("cars",userSchema)