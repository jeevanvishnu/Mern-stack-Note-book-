import Mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.MONGODB_URL



const connectDb = async () =>{
   try {

    await Mongoose.connect(URL)
        console.log("Database connection sucessfully")
    
    
   } catch (error) {

     console.log("Database connection failed" , error);
     
   }
}

export default connectDb
