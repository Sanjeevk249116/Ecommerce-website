const express=require("express");
require("dotenv").config();
const { connection } = require("./config/connection");
const { Router } = require("./RouterLinks/routers");



const app=express();

app.use(express.json());

app.use("",Router);


app.listen(process.env.PORT,async()=>{
    try{
         await connection;
         console.log("connection")    
    }catch(err){
        console.log(`server is not connect with ${process.env.PORT} port`)
    }
    console.log(`server is connected with port ${process.env.PORT} data base`)
})