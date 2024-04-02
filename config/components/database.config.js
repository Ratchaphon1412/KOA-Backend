import mongoose from "mongoose";

const db = mongoose.connection;

export const connectDB = async (url) => {
  
    try {
        console.log("Connecting to database...");
        await mongoose.connect(url,{
            useNewUrlParser: true,
  useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
    
}

db.on('error', console.error.bind(console, 'connection error:'));


export default db;