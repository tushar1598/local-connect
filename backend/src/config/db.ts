import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Database Connectes Successfully");
  } catch (err) {
    console.log("Error connecting to database: ", err);
    process.exit(1);
  }
};

export default connectDB;
