import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Student",
        required : true
    },
    classId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    status: {
    type: String,
    enum: ["PRESENT", "ABSENT"],
    default : "ABSENT"
  }

},{timestamps:true});
attendanceSchema.index({studentId : 1, classId : 1, date : 1}, {unique : true});
const attendanceModel = mongoose.model("Attendance",attendanceSchema);
export default attendanceModel;