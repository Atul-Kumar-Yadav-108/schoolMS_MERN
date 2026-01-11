import express from 'express'
import { login, me, register } from '../controllers/authController.js';
import { requireSignin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",requireSignin,me);

export default router;