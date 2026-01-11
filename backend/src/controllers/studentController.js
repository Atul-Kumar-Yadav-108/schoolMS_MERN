import { asyncHandler } from "../handlers/asyncHanlder.js";
import studentModel from "../models/StudentModel.js";

// create student - admin / superadmin
export const createStudent = asyncHandler(async(req, res)=>{
    const {userId, parentUserId, rollNumber, classId, section, parentContact, admissionDate} = req.body;

    if(!userId || !parentUserId || !rollNumber || !classId || !parentContact || !admissionDate){
        return res.status(400).json({
            success : false,
            message : "All fields are required"
        })
    }

    // existing student
    const existingStudent = await studentModel.findOne({userId, parentUserId});
    if(existingStudent){
        return res.status(409).json({
            success : false,
            message : "Student already exists"
        })
    }
    
    const checkRollNo = await studentModel.findOne({classId, rollNumber});
     if(checkRollNo){
        return res.status(409).json({
            success : false,
            message : "Roll number already exists in the class"
        })
    }

    const student = await studentModel({userId, parentUserId, rollNumber, classId, section, parentContact, admissionDate}).save();
    res.status(201).json({
        success : false,
        message : "Student created successfully",
        student
    })
});

// update students - admin/superadmin/parent/student
export const updateStudent = asyncHandler(async(req, res)=>{
    const {userId, parentUserId, rollNumber, classId, section, parentContact, admissionDate} = req.body;

    if(!userId || !parentUserId || !rollNumber || !classId || !parentContact || !admissionDate){
        return res.status(400).json({
            success : false,
            message : "All fields are required"
        })
    }

    // existing student
    const {id} = req.params;
    const existingStudent = await studentModel.findById(id);
    if(!existingStudent){
        return res.status(409).json({
            success : false,
            message : "Student does not exists"
        })
    }

    if(existingStudent.rollNumber != rollNumber){
        return res.status(409).json({
            success : false,
            message : "Roll number can not be changed"
        })
    }
    
    const student = await studentModel.findByIdAndUpdate(id,{userId, parentUserId, rollNumber, classId, section, parentContact, admissionDate},{new : true});
    res.status(201).json({
        success : false,
        message : "Student updated successfully",
        student
    })
});

// get single student - admin/superadmin/student/parent
export const getStudent = asyncHandler(async(req, res)=>{
    const {id} = req.params;
    const student = await studentModel.findById(id);
    if(!student){
        return res.status(403).json({
            success : false,
            message : "No user found"
        })
    }
    res.status(201).json({
        success : true,
        message : "Student",
        student
    })
});

// get all student - admin/superadmin
export const getStudents = asyncHandler(async(req, res)=>{
    const students = await studentModel.find();
     res.status(201).json({
        success : false,
        message : "All Students",
        students
    })
});

// delete student
export const deleteStudent = asyncHandler(async(req, res)=>{
    const {id} = req.params;
    await studentModel.findByIdAndDelete(id);
     res.status(201).json({
        success : false,
        message : "Student deleted successfully"
    })
});
