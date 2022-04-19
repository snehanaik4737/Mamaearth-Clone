  const {validationResult}=require("express-validator")
  var jwt = require('jsonwebtoken')
  require('dotenv').config()
  const generateToken=(user)=>{
    return jwt.sign({ user }, process.env.secret)
  }

  const User=require("../models/signupusers.model")
const register=async(req,res)=>{
    
        try {
         
          const errors = validationResult(req);
          
          if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
          }
           let user=await User.findOne({email:req.body.email})

           if(user){
             return res.status(400).send({message:"Email already exists"})
           }
            user = await User.create(req.body);
            var token = generateToken(user)
          return res.send({user,token});
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      }


const login=async(req,res)=>{
  try{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.send({error:errors.array()})
    }
    const user=await User.findOne({email:req.body.email})
    if(!user){
      return res.send({message:"wrong email or password"})
    } 
    const match=user.checkPassword(req.body.password)
    if(!match){
      return res.send({message:"wrong email or password"})
    }
    var token = generateToken(user)
    return res.send({user,token});
  }
     catch (error) {
        return res.status(200).send(error.message)
    }
}

module.exports={register,login,generateToken}