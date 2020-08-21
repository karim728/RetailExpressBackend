import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser';
import db from '../database/database.js'



let app = express();
app.use(bodyParser.json())
app.use(cors());

app.get('/home',(req,res)=>{
    res.send("this is the home page")
})

app.listen('3000',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server connection is a SUCCESS....... PORT : 3000")
    }
 })