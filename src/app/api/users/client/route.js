import { connectDB } from "@/app/dbconfig/db";
import { NextRequest, NextResponse } from "next/server"
import { ClientModel } from "@/models/client";



connectDB()

// get all clients
export async function GET(req){
    try {
        const fetchallClients = await ClientModel.find()
        return NextResponse.json({msg:fetchallClients},{status:200, statusText:"All Clients"})
    } catch (error) {
        return NextResponse.json({msg:"server Error"})

        
    }
}




// crate client
export async function POST(req){

    const {name, conpanyName, email,password} =await req.json()
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