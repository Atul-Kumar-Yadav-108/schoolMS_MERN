import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`${error}`.bgRed.white)
    }
}

export default connectDB