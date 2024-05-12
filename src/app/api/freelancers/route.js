import { connectDB } from "@/app/dbconfig/db"
import { NextRequest,NextResponse } from "next/server"
import { Freelance } from "@/models/freelancer"


connectDB()

// Fertch all freelancers
export async function GET(req){
    try {
        const fetchallFreelancers = await Freelance.find({})
        return NextResponse.json({msg:fetchallFreelancers},{status:200, statusText:"All Freelancers"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})

        
    }
}