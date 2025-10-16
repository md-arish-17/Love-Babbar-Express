const express = require("express")
const router = express.Router()

// app.get("/usman",(req,res)=>{
//     res.send("Usman world best baby")
// })

const {dummyRoute} = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")

router.get("/dummyRoute",dummyRoute)
router.post("/create/post",createComment)

module.exports = router