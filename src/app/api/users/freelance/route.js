import {connectDB} from "../../../dbconfig/db"
import { NextRequest, NextResponse } from "next/server"
import {Freelance} from "../../../../models/freelancer"
connectDB()

// get all freelancers
export async function GET(req){
    try {
        const fetchallFreelancers = await Freelance.findOne({})
        return NextResponse.json({msg:fetchallFreelancers},{status:200, statusText:"All Freelancers"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})

        
    }
}

// crate frelance
export async function POST(req){

    const {name,description,email,password,hourlyRate,domain,expertise,skills,superStars} = await req.json()
    const freelanceUser =new Freelance({
        name,
        description,
        email,
        password,
        hourlyRate,
        domain,
        expertise,
        skills,
        superStars
    })

    try {
        const userExist = await Freelance.findOne({email})
        if(userExist){
            return NextResponse.json({msg:"Already exist"})
        }else{
            const createNewFreeLance = await freelanceUser.save()
            return NextResponse.json({NewFreelance:createNewFreeLance}, {status:201, statusText:"Created"})
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"Server Error"})
        
    }


}