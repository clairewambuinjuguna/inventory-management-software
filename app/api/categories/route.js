import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export async function POST(request) {
  try {
    const { title, description } = await request.json();

    const category = await db.category.create({ data: { title, description } }); //access the modal ie category, then an access method-(create) which takes in an object of data
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a category",
      },
      { status: 500 }
    );
  }
}
