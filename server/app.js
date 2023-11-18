const express = require('express')
const app = express()
const cors = require('cors');
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send("<h1>RadiResponse</h1>")
})

app.get('/loginApi', (req, res)=>{
    res.send("Dobar dan")
})

app.listen(5001, ()=>{
    console.log("Server radi")
})