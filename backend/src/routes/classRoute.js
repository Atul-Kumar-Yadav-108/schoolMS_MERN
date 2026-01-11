import express from 'express'
import { createClass, deleteClass, getClass, getClasses, updateClass } from '../controllers/classController.js';
import { checkRole, requireSignin } from '../middlewares/authMiddleware.js';

const router = express.Router();
// create class || post method
router.post("/create-class",requireSignin, checkRole("Super_ADMIN", "ADMIN"),createClass);
// get all classes || get method
router.get("/get-classes",requireSignin, checkRole("Super_ADMIN", "ADMIN","TEACHER"),getClasses);

// get single class || get method
router.get("/get-class/:id",requireSignin, checkRole("Super_ADMIN", "ADMIN","TEACHER"),getClass);


// delete class || delete method
router.delete("/delete-class/:id",requireSignin, checkRole("Super_ADMIN", "ADMIN"),deleteClass);

// update class || put method
router.put("/update-class/:id",requireSignin, checkRole("Super_ADMIN", "ADMIN"),updateClass);



export default router;