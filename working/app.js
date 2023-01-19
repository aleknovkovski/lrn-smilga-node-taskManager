const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

async function start () {
        try {
            await connectDB()
            app.listen(5000,()=>{
                console.log("Server is listening on port 5000")
            })
        }
        catch (err) {
            console.error(err)
        }
}

start()