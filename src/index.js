// require('dotenv').config()
import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDb from "./DB/index.js";
import { configDotenv } from 'dotenv';
dotenv.config();


connectDb()