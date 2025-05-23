const mongoose =require("mongoose");


const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
    }
})

module.exports = mongoose.model('User',userSchema)
