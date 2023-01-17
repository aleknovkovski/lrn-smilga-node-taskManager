const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use('/api/v1/', tasks)
app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
