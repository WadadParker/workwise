import { connectDB } from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server"
import { Freelance } from "@/models/freelancer";

connectDB()
export async function GET(req, {params}){
    try {
        const sinlgeFreelance = await Freelance.findOne({_id:params.getsingleFreelance})
        return NextResponse.json({msg:sinlgeFreelance},{status:200, statusText:"All Freelancers"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})

        
    }
}
