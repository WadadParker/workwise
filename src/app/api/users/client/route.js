import { connectDB } from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server"
import { ClientModel } from "@/models/client";



connectDB()
export async function POST(req){

    const {name, conpanyName, email,password} =await req.json()
    console.log(name, conpanyName, email,password);

    const client = new ClientModel({
        name,
        conpanyName,
        email,
        password
    })

    try {
        const clientExist = await ClientModel.findOne({email})
        if(clientExist){
            return NextResponse.json({msg:"Already exist"})
        }else{
            const newClient = await client.save()
            return NextResponse.json({newClient:newClient}, {status:201, statusText:"Created"})
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({msg:"Server Error"})
        
    }


} 