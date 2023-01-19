const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://aleknovkovski:udAHMPCDztp8zBiG@nodeexpressprojects.qvwfxqy.mongodb.net/taskManager?retryWrites=true&w=majority'

function connectDB (url) {
    return mongoose.connect(connectionString)
}

module.exports = connectDB