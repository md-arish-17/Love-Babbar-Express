const Todo = require("../models/todo")

exports.getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Data of the todos is Fetched Successfully"
        })
    }
    catch(err){
        console.error(err)
        console.log("Data can't be Fetched")
        res.status(500).json({
            success:false,
            data:"Something went wrong try again",
            message:err.message
        })
    }
}