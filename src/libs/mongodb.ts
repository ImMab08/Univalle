import mongoose, { mongo } from "mongoose";

const { MONGODB_URL } = process.env
if (!MONGODB_URL) {
  throw new Error("MONGODB_URL must be defined")
}

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(MONGODB_URL);
    if (connection.readyState === 1) {
      console.log('MongoDB connectd');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
}