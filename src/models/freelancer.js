import mongoose, { Schema } from "mongoose"


const freeLanceSchema = new Schema({

    name:{
        type:String,
        reqiured:true,

    },
    description:{
        type:String,
        required:[true,"Enter Description"]
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
    domain:{
        type :String,
        enum:{
            values:["Developer", "Designer", "Content Writer", "Digital Marketing"],
            message: `{VALUE} is not Valid`,
        },
        required:[true,"Select Domain"]

    },

    expertise:{
        type:[String],
       
    },
    skills:{
        type:[String],
        
    },

    superStars:{
        type:Number,
        default:0
    },  
    // reviews:[{type:Schema.Types.ObjectId, ref:"reviews"}]
    
})


export const Freelance =mongoose.models?.freeLancers || mongoose.model("freeLancers", freeLanceSchema) 