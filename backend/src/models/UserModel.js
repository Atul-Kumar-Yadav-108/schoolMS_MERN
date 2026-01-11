import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required :  true,
    },
    answer : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enums: ["SUPER_ADMIN", "ADMIN", "TEACHER", "STUDENT", "PARENT"],
        default: "STUDENT",
    },
    schoolId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "School"
    },
    isActive : {
        type : Boolean,
        default : true
    }
},{
    timestamps:true
});

const userModel = mongoose.model("User",userSchema);
export default userModel;