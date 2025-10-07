const express = require("express")
const router = express.Router()

const {createTodo} = require("../controller/createTodo")
const {getTodo} = require("../controller/getTodo")
const {getTodoByID} = require("../controller/getTodoID")

router.post("/createTodo",createTodo)
router.get("/getTodoData", getTodo)
router.get("/getTodo/:id",getTodoByID)

module.exports = router