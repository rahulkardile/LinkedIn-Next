import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Database is already connected");
    return isConnected;
  }

  try {
    const res = await mongoose.connect(process.env.MONGO_URL!);
    isConnected = res.connection;
    console.log("Database is connected");
    return isConnected;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;