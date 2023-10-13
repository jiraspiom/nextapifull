import mongoose from "mongoose"

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log('conectado mongodb')
    } catch (error: any) {
        console.log(error)
    }
}

export default connectMongoDB