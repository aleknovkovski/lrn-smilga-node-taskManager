const Task = require('../models/Task')

function getAllTasks(req, res) {
    res.send("All items")
}

async function createTask(req, res) {
    try {
        const task = await Task.create(req.body)
        res.json({message: "Create task", request: task})
    }
    catch (err) {
        res.status(500).json({"message": err})
    }
}

function getTask(req, res) {
    res.json({message: "Get task", request: req.params.id})
}

function updateTask(req, res) {
    res.send("Update task")
}

function deleteTask(req, res) {
    res.send("Delete task")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}