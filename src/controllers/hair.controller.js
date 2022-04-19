const express = require("express")
const app = express();
const baby = require("../models/hair.model")
// console.log(happy just checking)
app.get("",
async(req,res)=>{
    try{
     const page = req.query.page  || 1
     const pagesize = req.query.pagesize || 10
     const skip = (page-1)*pagesize 
     const data = await baby.find({}).skip(skip).limit(pagesize).lean().exec()
     return res.send(data)
    }catch(err){
        console.log(err.meassge)
        return res.send(err.message)
    }
})
module.exports = app;
