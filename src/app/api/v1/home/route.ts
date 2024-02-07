import { prisma } from "@/lib/prisma";
import { Home } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const homes: Home[] = await prisma.home.findMany();
  return NextResponse.json(homes);
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();

    const registerHome = await prisma.home.create({
      data: { ...response },
    });

    return NextResponse.json(registerHome);
  } catch (e) {
    throw Error(`Error in create a home API: ${e}`);
  }
}
