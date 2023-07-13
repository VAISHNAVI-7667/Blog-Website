import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type: mongoose.Types.ObjectId,  //linking user and blogs
        ref:"User",  //collection name
        required:true,
    },
}

)
export default mongoose.model("Blog",blogSchema);