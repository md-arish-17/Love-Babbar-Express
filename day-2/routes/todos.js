const express = require("express")
const router = express.Router()

const {createTodo} = require("../controller/createTodo")
const {getTodo} = require("../controller/getTodo")
const {getTodoByID} = require("../controller/getTodoID")
const {updateTodo} = require("../controller/updateTodo")

router.post("/createTodo",createTodo)
router.get("/getTodoData", getTodo)
router.get("/getTodo/:id",getTodoByID)
router.patch("/updateTodoData/:id",updateTodo)

module.exports = router