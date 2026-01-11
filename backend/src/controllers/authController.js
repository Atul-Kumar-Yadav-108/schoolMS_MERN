import { asyncHandler } from "../../handlers/asyncHanlder.js";
import userModel from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "7d" });
}

export const register = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    // existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "Already user exists"
        })
    }

    // hashing password 
    const hashedPassword = await hashPassword(password);

    // saving record 
    const user = await userModel({ name, email, password : hashedPassword, role }).save();
    const token = generateToken(user);
    res.status(201).json({ success:true, message : "User Registration successfull",user, token });

})

export const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    // existing user
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(401).json({
            success: false,
            message: "Not a valid user.Create account."
        })
    }
    console.log(user)
    // compare password
    const isMatch = await comparePassword(password, user.password);
    if(!isMatch){
        return res.status(401).json({
            success: false,
            message: "Invalid password"
        })
    }
    
    // token
    const token =  generateToken(user);

     res.status(201).json({ success:true, message : "Login successfull successfull",user, token });
})

export const me = asyncHandler(async(req,res)=>{
    res.json(req.user);
})