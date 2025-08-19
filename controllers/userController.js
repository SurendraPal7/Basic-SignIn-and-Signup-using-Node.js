import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
const registerUser = async (req, res) => {

    try{
        const { FullName, email, password, confirmPassword, phone } = req.body;
        const hashpwd=await bcrypt.hash(password,10);
        // Validate input
        const user={
            FullName,
            email,
            password: hashpwd,
            confirmPassword: hashpwd,
            phone
        }
        const result= await User.create(user);
        res.status(201).json({ message: "User registered successfully", user: result });




        // Check if user already exists

    }
    catch(err){
        console.error("Error in registerUser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
   
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user });
    }
    catch (err) {
        console.error("Error in loginUser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export  { registerUser, loginUser };
