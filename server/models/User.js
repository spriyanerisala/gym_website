import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    subscription:{type:mongoose.Schema.Types.ObjectId,ref:'Subscription'}

},{timestamps:true})

const user = mongoose.model("User",userSchema)

export default user