import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = `mongodb://localhost:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Database connected');
  } catch (error) {
    console.error(`Error:${error.message}`);
    throw error;
  }
};

export default connectDB;
