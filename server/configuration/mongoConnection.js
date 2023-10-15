import mongoose from "mongoose"


const connection=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL).then(console.log("mongodb has  connected successfully"))
    } catch (error) {
        console.log(error);
    }
}

export default connection