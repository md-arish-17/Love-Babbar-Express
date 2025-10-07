const Todo = require("../models/todo")

exports.deleteTodo = async(req,res)=>{
    try{
        const id = req.params.id
        const deleteData = await Todo.findByIdAndDelete({_id:id})
        if(deleteData){
            return res.status(200).json({
                success:true,
                data:deleteData,
                message:"Data of the given user deleted Successfully"
            })
        }
        else{
            return res.status(404).json({
                success:false,
                data:"No Data Found",
                message:"Given user data is not found"
            })
        }
    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            data:"No Data Found"
        })
    }

}