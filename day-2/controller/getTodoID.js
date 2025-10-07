const Todo = require("../models/todo")

exports.getTodoByID = async(req,res)=>{
    try{
        const id = req.params.id
        const dataByID = await Todo.findById({_id:id})
        if(dataByID){
            return res.status(200).json({
            success:true,
            data:dataByID,
            message:`Data by using ID ${id} is Fetched successfully`
        })
        }
        else{
            return res.status(404).json({
                success:false,
                data:"No data found with given id",
                message:"Send Proper ID"
            })
        }
    }
    catch(err){
        console.error(err)
        console.log("Error something went wrong can't fetched data by using ID")
        res.status(500).json({
            success:false,
            data:"Can't Fetched data error occurs",
            message:err.message
        })
    }
}