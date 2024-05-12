import { connectDB } from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server";
import { ProjectModel } from "@/models/client";


connectDB()
export async function POST(req, {params}){
        try {   
            const searchString = params.search;
            if (typeof searchString !== 'string') {
                return NextResponse.json({msg:"serach shouold be string"})
            }
            const projects = await ProjectModel.aggregate([
                {
                  $match: {
                    $or: [{title: { $regex: searchString, $options: 'i'} } 
                    ]
                  }
                }
              ]);
              console.log(projects);

              return NextResponse.json({projects},{status:200})
        } catch (error) {
            console.log(error);
            return NextResponse.json({msg:error})

        }
} 