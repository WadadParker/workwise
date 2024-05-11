import { connectDB} from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server"
import { ProjectModel } from "@/models/client";


connectDB()

// get all projects
export async function GET(req){
    try {
        const fetchallProjects = await ProjectModel.find()
        return NextResponse.json({msg:fetchallProjects},{status:200, statusText:"All Projects"})
    } catch (error) {
        
    }
}


// create new project
export async function POST(req){
    const {title, description, hourlyRate, category,expertise,skills,status} = await req.json()
    const project = new ProjectModel({
        title, 
        description, 
        hourlyRate, 
        category,
        expertise,
        skills,
        status    
    })

    try {
        const newProject = await project.save()
        return NextResponse.json({msg:newProject},{status:201, statusText:"Project Created"})
    } catch (error) {
        return NextResponse.json({msg:"server error"})
        
    }

    
}