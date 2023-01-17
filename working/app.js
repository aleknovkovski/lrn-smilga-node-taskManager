const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware

// routes
app.use('/api/v1/tasks', tasks)

app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
