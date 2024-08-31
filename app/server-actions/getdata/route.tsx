import path from "path";
import { promises as fs } from "fs";

import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({message:"Success from get",status:200},{status:200})
}

export async function POST(req: NextRequest) {
    const data = await fs.readFile(path.join(process.cwd(), "app/files/MCQ-1.json"), "utf-8");
    const p_data = JSON.parse(data);
    return NextResponse.json(p_data);
}
export const dynamic = "force-static";
