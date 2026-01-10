import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required: true
    },
    classId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : true
    },
    subject : {
        type : String,
        trim : true,
        required : true
    },
    maxMarks : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required :true
    }
},{timestamps : true});

examSchema.index({classId:1, subject : 1, date : 1},{unique : true})

const examModel = mongoose.model("Exam",examSchema);
export default examModel;