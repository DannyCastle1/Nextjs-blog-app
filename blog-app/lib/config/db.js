import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://castillodaniel1:WST123@cluster0.8mnrmmc.mongodb.net/blog')
    console.log('DB connected')
}