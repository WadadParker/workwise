import mongoose, { Schema } from "mongoose"


const review = new Schema({
    reviewerName:{
        type:String,
        required:[true, "reveiwer name neede"]
    },
    reviewedFor:{

    },
    rating:{
        type:Number,
        required:[true,"rating is required"]
    },
    commetn:{
        type:String,
        required:[true, "Add comment"]
    }

})