import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';
import { asyncHandler } from '../handlers/asyncHanlder.js';

export const requireSignin = asyncHandler(async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            success : false,
            message : "No token provider"
        })
    }
    const decode = await jwt.verify(token,process.env.JWT_SECRET);
    const user = await userModel.findById(decode.id).select("-password");
    if (!user || !user.isActive) {
      return res.status(401).json({ message: "User not active" });
    }
    req.user = user;
    next();
})


/**
 *  usage : checkRole("ADMIN","STUDENT","TEACHER")
 */

export const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied",
            });
        }
        next();
    };
};