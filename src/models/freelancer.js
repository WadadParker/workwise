import mongoose, { Schema } from "mongoose"


const freeLanceSchema = new Schema({

    name:{
        type:[String, "Name is required"],
        reqiured:true,

    },

    email:{
        type:String,
        unique:true,
        reqiured:[true , "Email is required"]
    },


    password:{
        type:String,
        required:[true, "Password Required"]
    },
    hourlyRate:{
        type:Number,
        required:[true,"Hourly Rate is required"]
    },
    category:{
        type :String,
        enum:{
            values:["Developer", "Desiginer", "Content Writer", "Digital Marketting"],
            message: `{VALUE} is not Valid`,
        },
        required:[true,"Select Category"]

    },

    expertise:{
        type:[String],
        required:[true,"Expertise is also required"]
    },

    superStars:{
        type:Number,
        default:0
    }

    
    
})


export const Freelance =mongoose.models.freeLancers || mongoose.model("freeLancers", freeLanceSchema) 