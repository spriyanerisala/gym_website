import mongoose from "mongoose";

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('Mongodb connected...')
    }).catch((err)=>{
        console.log('Not connected Database',err)
    })
}

export default connectDB