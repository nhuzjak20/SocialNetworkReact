const express = require('express')
const app = express()
const cors = require('cors');
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log('na homu smo')
    if(req.cookies.user){
        //kolacic radi
        res.send(1)    
    } else {
        //kolacic ne radi
        res.send(0)
    } 
})

app.post('/loginApi', urlencodedParser ,(req, res)=>{
    res.end()
})

app.listen(5001, ()=>{
    console.log("Server radi")
})