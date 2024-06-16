// require('dotenv').config()
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./DB/index.js";
import { configDotenv } from 'dotenv';
dotenv.config();


connectDb().then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is Running at PORT : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Error : MongoDB CONNECTION FAILED !!" , error)
})