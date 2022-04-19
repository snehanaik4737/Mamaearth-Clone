const express=require("express")
const router=express.Router()
const User=require("../models/signupusers.model")

router.get("",async(req,res)=>{
    try {
        const user=await User.find().lean().exec()
        res.send(user)
    } catch (error) {
        res.send({message:error.message})
    }
})

router.get("/:email",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.params.email}).lean().exec()
        res.send(user)
    } catch (error) {
        res.send({message:error.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        res.send(user)
    } catch (error) {
        res.send({message:error.message})
    }
})
module.exports=router