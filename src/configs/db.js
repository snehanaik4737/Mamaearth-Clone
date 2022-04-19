const mongoose = require("mongoose")
const connect = ()=>{
    return mongoose.connect("mongodb+srv://abdulrasheed8123:Rasheed@cluster0.8vvod.mongodb.net/test")
}
module.exports = connect;