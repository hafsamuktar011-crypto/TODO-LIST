const server=express()



server.listen(1000,(err)=>{
    if(err) throw err
    console.log("server is running at port 1000")
})