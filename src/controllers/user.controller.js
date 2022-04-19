const express = require("express")
const app = express();
const users = require("../models/user.model")

const { body, validationResult } = require('express-validator');
// console.log(happy just checking)
app.get("",
async(req,res)=>{
    try{
     const data = await users.find({})
     return res.send(data)
    }catch(err){
        console.log(err.meassge)
        return res.send(err.message)
    }
})
app.post(""
// body("firstname").not().isEmpty().withMessage("enter the first name"),
// body("lastname").not().isEmpty().withMessage("enter the last name"),
// body("email").isEmail().withMessage("enter the valid email"),
// body("pincode").isNumeric().isLength({min:6,max:6}).withMessage("enter valid pincode"),
// body("age").custom((value)=>{
//    if(value<0 || value>100){
//        throw new Error("age should be btwn 1 to 100")
//    }
//    else{
//        return true
//    }
// }),
// body("gender").custom((value)=>{
//     if(value=="male" || value=="female" || value=="others"){
//         return true
//     }
//     else{
//         throw new Error("plz give specified gender")
//     }
// })
,async(req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.send(errors.array())
        }
    const data = await users.create(req.body)
    return res.send(data)
    }catch(err){
        console.log(err.meassge)
    }
})
module.exports = app;