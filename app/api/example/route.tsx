import path from "path";
import { promises as fs } from "fs";

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest){
    return NextResponse.json({message: "Fetched Successfully from get!!" , status:200},{status:200}) ;
}

export async function POST(req: NextRequest) {
    return NextResponse.json({message: "Fetched Successfully from post !!" , status:200},{status:200}) ;
}
