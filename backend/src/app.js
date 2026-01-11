import express from "express";
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from "morgan";
import cors from 'cors'
import connectDB from "./config/db.js";
dotenv.config();


const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));



export default app;
