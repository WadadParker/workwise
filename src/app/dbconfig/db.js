import mongoose from "mongoose"


const mongoURI = process.env.MONGODB_URI;

export  const connectDB = async ()=>{
    try {
        const { connection } = await mongoose.connect(mongoURI)
        console.log("Connected to DB")

     
    
        connection.on("error",(err)=>{
            console.log("Connection Error DB"  + err)
            process.exit()

    })
        
    } catch (error) {
            console.log(error);
            console.log("something wrong, cannot connect");
            
    }
}