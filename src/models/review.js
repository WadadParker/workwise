import mongoose, { Schema } from "mongoose"


const review = new Schema({
    reviewerName:{
        type:String,
        required:[true, "reveiwer name neede"]
    },
    reviewFor:{
        type:String,
        required:[true, "Fetch RreviewFor name"]

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

export const Review =mongoose.models.reviews || mongoose.model("reviews",review) 
