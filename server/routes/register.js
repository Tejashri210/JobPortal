const express = require("express");

const route = express.Router();

route.get("/register",(req,res)=>{
    res.send("hii")
})
module.exports=route;