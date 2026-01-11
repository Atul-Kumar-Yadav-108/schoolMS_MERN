import { asyncHandler } from "../handlers/asyncHanlder.js";
import classModel from "../models/ClassModel.js";

export const createClass = asyncHandler(async(req,res)=>{
    const {name, section, classTeacher} = req.body;
    if(!name || !section){
        return res.status(401).json({
            success : false,
            message : "All fields are required"
        });
    }
    // check existing class and section
    const existingClass = await classModel.find({name});
    console.log(existingClass)
    if(existingClass ){
        existingClass.forEach((ec) => {
            if(ec.section == section){
        return res.status(401).json({
            success : false,
            message : "This class and section already exists"
        });
            }
        })

    }

    const classDetails = await classModel({name, section, classTeacher}).save();
    res.status(201).json({
        success : true,
        message : "Class created successful",
        classDetails
    })

})

export const updateClass = asyncHandler(async(req,res)=>{
    const {name, section, classTeacher} = req.body;
    const {id} = req.params;
     if(!name || !section){
        return res.status(401).json({
            success : false,
            message : "All fields are required"
        });
    }
    // check existing class and section
    const existingClass = await classModel.find({name});
    console.log(existingClass)
    if(!existingClass){
        return res.status(401).json({
            success : false,
            message : "Class does not exists"
        });
    }

    if(existingClass){
        existingClass.forEach((ec) => {
            if(ec.section == section){
        return res.status(401).json({
            success : false,
            message : "This class and section already exists"
        });
            }
        })

    }

    const classDetails = await classModel.findByIdAndUpdate(id, {name, section, classTeacher},{new : true});
    res.status(201).json({
        success : true,
        message : "Class successfully updated",
        classDetails
    })
})

export const deleteClass = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    await classModel.findByIdAndDelete(id);
    res.status(201).json({
        success : true,
        message : "Class deleted successful"
    })
})

// find all class togather
export const getClasses = asyncHandler(async(req,res)=>{
    const allClass = await classModel.find();
     res.status(201).json({
        success : true,
        message : "Class created successful",
        allClass
    })
})

// find one class based on classname and section
export const getClass = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const singleClass = await classModel.findById(id);
    if(!singleClass){
         return res.status(401).json({
            success : false,
            message : "Class does not exists"
        });
    }
     res.status(201).json({
        success : true,
        message : "Class created successful",
        singleClass
    })
})