const {getAllTasks, getMyTasks, createTask, updateTask,deleteTask} = require("../controllers/taskController")
const {authorize, protect}= require('../middleware/auth')
const express = require('express')
const router = express.Router();

router.post('/' , protect, createTask);
router.get("/my" , protect, getMyTasks);
router.get('/all', protect, getAllTasks);
router.put('/:id' , protect,authorize(["admin"]), updateTask);
router.delete('/:id' , protect,authorize(["admin"]), deleteTask)

module.exports = router;