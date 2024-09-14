const express=require("express");
require('dotenv').config()


let app=express();


let port=8080;


app.listen(process.env.PORT,()=>{


    console.log(`The request is running at the port number ${port}`);
    
})



app.get("/",(req,res)=>{


    res.send("It is a home request");
})

app.get("/abhi",(req,res)=>{


    res.send("It is a user request");
})
app.get("/login",(req,res)=>{


    res.send("It is a login request");
})   


app.get("/path",(req,res)=>{


    res.send("It is a login request");
}) 








