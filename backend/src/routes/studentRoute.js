import express from "express";
import { checkRole, requireSignin } from "../middlewares/authMiddleware.js";
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from "../controllers/studentController.js";
const router = express.Router();

// create student || post method
router.post("/create-student",requireSignin, checkRole("SUPER_ADMIN", "ADMIN"), createStudent);

// update student || put method
router.put("/update-student/:id",requireSignin, checkRole("SUPER_ADMIN", "ADMIN"), updateStudent);

// get single students || get method
router.get("/get-student/:id",requireSignin, checkRole("SUPER_ADMIN", "ADMIN"), getStudent);

// get all students || get method
router.get("/get-students",requireSignin, checkRole("SUPER_ADMIN", "ADMIN"), getStudents);

// delete student || delete method
router.delete("/delete-student/:id",requireSignin, checkRole("SUPER_ADMIN", "ADMIN"), deleteStudent);

export default router;