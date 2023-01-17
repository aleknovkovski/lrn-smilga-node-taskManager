const express = require('express')
const app = express()

app.get('/hello', (req, res)=> {
    res.send("Helooo there")
})
app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
