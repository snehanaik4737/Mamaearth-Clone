const express = require("express")
const connect = require("./configs/db")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

const { body } = require("express-validator");
const usercontroller = require("./controllers/user.controller")
const baby = require("./controllers/hair.controller")
const signupusercontroller = require("./controllers/signupusers.controller")
const {register,login,generateToken}=require("./controllers/auth.controller")
app.use("/hair",usercontroller)
app.use("/baby",baby)
app.use("/users",signupusercontroller)
const passport=require("./configs/google-oauth")



app.post("/register",body("phone")
.trim()
.not()
.isEmpty()
.withMessage("Phone number cannot be empty")
.isLength({ min: 10 ,max:10})
.withMessage("number should be of length 10"),body("name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be empty")
.isLength({ min: 4 })
.withMessage("First Name must be at least 4 characters"),body("email")
.not()
.isEmpty()
.withMessage("email cannot be empty")
.isEmail(),body("password").not().isEmpty().isLength({min:4}),register)

app.post("/login",body("email").not().isEmpty()
.withMessage("email cannot be empty")
.isEmail(),body("password").not()
.isEmpty()
.withMessage("password cannot be empty")
.isLength({ min: 4 })
.withMessage("password must be at least 4 characters"),login)

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        
        failureRedirect: '/login',
        session:false
}),function(req,res){
    var token = generateToken(req.user)
    //  app.link("index.html")
    // console.log(window.location)
    // if(token){
    //     window.location.href="http://localhost:5501/index.html"
    // }
    //   res.status(200).send({user:req.user,token})
      if(token){
        res.redirect("http://127.0.0.1:5501/index.html")
      }
     

});



app.listen(5000,async()=>{
    try{
        await connect()
        console.log("listening at 5000")
    }catch(err){
        console.log(err.message)
        // return res.send(err.message)

    }
    
})



