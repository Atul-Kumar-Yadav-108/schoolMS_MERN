import mongoose  from "mongoose";
const teacherSchema = new mongoose.Schema({
    userId :{
        type :mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
        unique: true
    },
    subjects : {
        type : [String],
        default : []
    },
    assignedClasses : [{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Class"
    }]
},{timestamps : true});

const teacherModel = mongoose.model("Teacher",teacherSchema);
export default teacherModel;