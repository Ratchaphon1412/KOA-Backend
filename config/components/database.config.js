import mongoose from "mongoose";

const connectDB = async (url) => {
  
    try {
        console.log("Connecting to database...");
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

export default connectDB;