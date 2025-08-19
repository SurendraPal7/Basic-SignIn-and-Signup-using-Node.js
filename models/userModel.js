import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    
    FullName:{type:String,},
    email:{type:String, unique:true},
    password:{type:String, },
    confirmPassword:{type:String, },
    phone:{type:String},
})
export default mongoose.model("user",userSchema);