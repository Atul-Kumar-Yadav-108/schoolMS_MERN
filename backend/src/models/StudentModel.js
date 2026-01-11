import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    parentUserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    rollNumber : {
        type : String,
        required : true,
    },
    classId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Class'
    },
    section : {
        type : String,
    },
    parentContact : {
        type : String,
        required : true,
        match: /^[0-9]{10}$/ // example: 10-digit numbers
    },
    admissionDate : {
        type : Date,
        required : true
    }

},{timestamps:true});

// Optional: unique roll number per class
studentSchema.index({ classId: 1, rollNumber: 1 }, { unique: true });

// Optional: unique user and unique parent
studentSchema.index({ userId: 1, parentUserId: 1 }, { unique: true });

const studentModel = mongoose.model("Student",studentSchema);
export default studentModel;