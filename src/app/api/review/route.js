import { connectDB } from "@/app/dbconfig/db"
import { NextRequest, NextResponse } from "next/server"
import { Review } from "@/models/review"


connectDB()

// fetch all Reviews
export async function GET(req){
    try {
        const getAllReviews = await Review.find({})
        return NextResponse.json({msg:getAllReviews},{status:200, statusText:"All Reviews"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})   
    }
}