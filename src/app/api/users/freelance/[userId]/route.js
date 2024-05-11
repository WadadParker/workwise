import { connectDB } from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server"
import { Freelance } from "@/models/freelancer";
import { Review } from "@/models/review";


connectDB()

// fetch individual review for freelancer
export async function GET(req, {params}){
    try {
        const sinlgeFreelance = await Review.find({reviewFor:{ $eq: params.userId } })


        return NextResponse.json({ msg: sinlgeFreelance }, { status: 200, statusText: "Freelancer Reviews" });
    } catch (error) {
        return NextResponse.json({msg:error,userId:params.userId})   
    }
}


// supposd: client is Logged id
// create review from client to Freelance

export async function POST(req,{params}){
    try {
        const sinlgeFreelance = await Freelance.findOne({_id:params.userId})
        if(sinlgeFreelance){
            // const reviewForName = sinlgeFreelance._id
            const {reviewerName,rating,commetn} = await req.json()


            const review = new Review({
                reviewerName,
                reviewFor:params.userId,
                rating,
                commetn
                
            })        

            const reviewAdded= await review.save();
            return NextResponse.json({msg:reviewAdded},{status:201,statusText:"Review Created"})
        }
       else{
            return NextResponse.json({msg:"Freelacner Not exist, can't review"})
        }

    } catch (error) {
        return NextResponse.json({msg:error})
        
    }

}
