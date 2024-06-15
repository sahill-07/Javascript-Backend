import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error MONGODB CONNECTION FAILED : " , error)    
    }
}

export default connectDb ;