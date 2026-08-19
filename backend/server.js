import express from "express"
import mysql from "mysql2"


const server=express()

//create connection
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3306
   })
connection.connect((err)=>{
    if(err){
        console.log("MySQL connection failed:",err.message)
        return
    }
})


server.listen(1000,(err)=>{
    if(err) throw err
    console.log("server is running at port 1000")
})