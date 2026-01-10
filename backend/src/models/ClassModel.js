import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    section : {
        type : String,
        required : true,
    },
    classTeacher : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Teacher",
         default: null
    }
},{timestamps:true});

// Prevent duplicate classes like "10-A"
classSchema.index({ name: 1, section: 1 }, { unique: true });

const classModel = mongoose.model("Class",classSchema);
export default classModel;