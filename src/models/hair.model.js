const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    "id": {type:Number,required:false},
    "desc": {type:String,required:false},
    "price": {type:String,required:false},
    "img": {type:String,required:false},
    "rating": {type:String,required:false},
    "category": {type:String,required:false},
    "rating_img": {type:String,required:false},
})
const hair = mongoose.model("hair",UserSchema)
module.exports = hair;