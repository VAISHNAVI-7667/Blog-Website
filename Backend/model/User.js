import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    blogs:[{type: mongoose.Types.ObjectId,ref:"Blog",required:true}]// one user contains many blog so array
})

export default mongoose.model("User",userSchema);