import mongoose from "mongoose";

 export const ConnectDB = async () =>{
    await mongoose.connect(process.env.MONGO_DB)
    console.log('DB connected')
}
