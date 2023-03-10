const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {CustomAPIError, createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async function (req, res) {
    const tasks = await Task.find({})
    res.json({message: "Get all tasks", tasks: tasks})
})

const createTask = asyncWrapper(async function (req, res) {
    const task = await Task.create(req.body)
    res.json({message: "Create task", request: task})
})

const getTask = asyncWrapper(async function (req, res, next) {
    const {id:taskId} = req.params;
    const task = await Task.findOne({_id: taskId})
    if (!task) {return next(createCustomError("No Task Found", 404))}
    res.json({message: "Get task", task: task})
})

const updateTask = asyncWrapper(async function (req, res) {
    const {id:taskId} = req.params;
    const query = {_id: taskId}, update = req.body,
        options = {returnDocument: "after", runValidators: true}
    const task = await Task.findOneAndUpdate(query, update, options)
    if (!task) {return res.status(404).json({message: "Task not found"})}
    res.json({message: "Update task", task: task})
})

const deleteTask = asyncWrapper(async function (req, res, next) {
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id: taskId})
    if (!task) {
        const error = new Error('Not Found'); error.status = 404;
        return next(error);
    }
    res.json({message: "Delete task", task: task})
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}