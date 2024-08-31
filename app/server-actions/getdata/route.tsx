import path from "path";
import { promises as fs } from "fs";

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest){
    try{
        const data = await fs.readFile(path.join(process.cwd(),"/app/files/MCQ-1.json"), "utf-8");
        const p_data = JSON.parse(data);
        //const p_data = {url: req.nextUrl.pathname} ;
        return NextResponse.json(p_data, {status:200});
    } catch(e){
        return NextResponse.json({message: "Fetched Successfully !!" , status:500},{status:500}) ;
    }
}

export async function POST(req: NextRequest) {
   // const data = await fs.readFile(path.join(process.cwd(), "app/files/MCQ-1.json"), "utf-8");
    try {
        const data = await fs.readFile(path.join(process.cwd(),"/app/files/MCQ-1.json"), "utf-8");
        const p_data = JSON.parse(data);
        //const p_data = {url: req.nextUrl.pathname} ;
        return NextResponse.json(p_data, {status:200});
    }catch (e){
        return NextResponse.json({"message":"Not Successfull","error":e,"path":path.join(__dirname,"MCQ-1.json")} , {status:500});
    }
}

