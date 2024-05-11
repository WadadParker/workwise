
import { connectDB } from "@/app/dbconfig/db"
import { NextRequest, NextResponse } from "next/server"
import { ClientModel } from "@/models/client"



connectDB()
export async function GET(req, {params}){
    try {
        console.log(params);
        const sinlgeClient = await ClientModel.findOne({_id:params.getsingleClient})
        return NextResponse.json({msg:sinlgeClient},{status:200, statusText:"All Freelancers"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})

    }
}