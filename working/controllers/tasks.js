const Task = require('../models/Task')

async function getAllTasks(req, res) {
    try{
        const tasks = await Task.find({})
        res.json({message: "Get all tasks", tasks: tasks})
    }
    catch (err){
        res.status(500).json({"message": err})
    }
}

async function createTask(req, res) {
    try {
        const task = await Task.create(req.body)
        res.json({message: "Create task", request: task})
    } catch (err) {
        res.status(500).json({"message": err})
    }
}

async function getTask(req, res) {
    const {id:taskId} = req.params
    try{
        const task = await Task.findOne({_id: taskId})
        if (!task) {return res.status(404).json({message: "Task not found"})}
        res.json({message: "Get task", task: task})
    }
    catch(err){
        res.status(500).json({"message": err})
    }
}

async function updateTask(req, res) {
    const {id:taskId} = req.params;
    const query = {_id: taskId}, update = req.body,
        options = {returnDocument: "after", runValidators: true}
    try{
        const task = await Task.findOneAndUpdate(query, update, options)
        if (!task) {return res.status(404).json({message: "Task not found"})}
        res.json({message: "Update task", task: task})
    }
    catch(err){
        res.status(500).json({"message": err})
    }
}

async function deleteTask(req, res) {
    const {id:taskId} = req.params
    try{
        const task = await Task.findOneAndDelete({_id: taskId})
        if (!task) {return res.status(404).json({message: "Task not found"})}
        res.json({message: "Delete task", task: task})
    }
    catch(err){
        res.status(500).json({"message": err})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}