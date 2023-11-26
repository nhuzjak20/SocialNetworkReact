const express = require('express')
const app = express()
const cors = require('cors');
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./baza.db',()=>console.log('baza radi'));


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

app.get('/kreirajBaze', (req, res)=>{
    db.all('CREATE TABLE Objave ( NaslovObjave TEXT, KategorijaObjave TEXT, Tekst TEXT, NazivKorisnika TEXT, DatumObjave DATE);')
    db.all('CREATE TABLE Korisnici (username TEXT,password TEXT,AuthNum INTEGER);')
    res.send('Baza je kreirana')
})

app.get('/PrikaziObjave', (req, res) => {
    var redovi = []
    console.log("Spojen si")
    if(req.params.kategorija){
        db.all('SELECT * FROM Objave WHERE KategorijaObjave = ' + req.params.kategorija,(err,res) => {
            res.forEach((el)=>{
                redovi.push(el)
            })    
        })
        res.send(redovi)
        res.end()
    }
    db.all('Select * from Objave', [],(err, rows)=>{
        rows.forEach(row =>{
        redovi.push(row)
        })
        res.send(redovi)
    })
   
})

app.post('/sendPost', urlencodedParser ,(req, res)=>{
    const datum = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    //console.log(req.body.naslov, req.body.kategorija , Date.parse(Date.now()), req.body.text,req.body.username)
    db.all('insert into Objave(NaslovObjave, KategorijaObjave, Tekst, NazivKorisnika , DatumObjave) values(?,?,?,?,?)',[req.body.naslov, req.body.kategorija ,req.body.text , req.body.username, datum], (err, rows)=>{
        if(err){
            console.log(err);
        } else {
            console.log("Unos radi")
            res.send("Radi")
        }
    })
})

app.listen(5001, ()=>{
    console.log("Server radi")
})