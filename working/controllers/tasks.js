function getAllTasks(req, res) {
    res.send("All items")
}

function createTask(req, res) {
    res.json({message: "Create task", request: req.body})
}

function getTask(req, res) {
    res.send("Get task")
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