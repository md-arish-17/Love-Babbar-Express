const Todo = require("../models/todo")

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params
        const {title,description} = req.body
        const updateData = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )
        if(updateData){
            return res.status(200).json({
                success:true,
                data:updateData,
                message:"User Data Updated Successfully",
            })
        }
        else{
            return res.status(404).json({
                success:false,
                data:"No Data Found of this User",
                message:"Give the Correct data or id of this person"
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}