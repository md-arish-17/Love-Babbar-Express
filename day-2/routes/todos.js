const express = require("express")
const router = express.Router()

const {createTodo} = require("../controller/createTodo")
const {getTodo} = require("../controller/getTodo")

router.post("/createTodo",createTodo)
router.get("/getTodoData", getTodo)

module.exports = router