const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)

async function start () {
        try {
            await connectDB(process.env.MONGO_URI)
            app.listen(5000,()=>{
                console.log("Server is listening on port 5000")
            })
        }
        catch (err) {
            console.error(err)
        }
}

start()