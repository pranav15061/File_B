// I4M01pLsAeFPJyFI


import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

const DBConnection = async () => {
    // const USERNAME = process.env.DB_USERNAME;
    // const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://pranavbagal4:I4M01pLsAeFPJyFI@file-sharing.yf0f36l.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(MONGO_URI);   // use newParser is removed from here
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;