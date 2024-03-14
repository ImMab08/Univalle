import mongoose, { mongo } from "mongoose";

const { MONGODB_URl } = process.env
if (!MONGODB_URl) {
  throw new Error("MONGODB_URl must be defined")
}

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(MONGODB_URl);
    if (connection.readyState === 1) {
      console.log('MongoDB connectd');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
}