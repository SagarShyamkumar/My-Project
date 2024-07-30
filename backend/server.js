const express = require ("express")
const {chats} = require('./data/data')
const client = require('./Database/db')

client()
const app = express()
app.get('/api/chatbot', (req,res) => {
    res.send(chats)
})

app.listen(5000,console.log("Server started on port 5000"))