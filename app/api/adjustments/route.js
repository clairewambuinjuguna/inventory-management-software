import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { title, location, type, description } = await request.json();

    const adjustment = { title,location,type,description};
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to make adjustment ",
      },
      { status: 500 }
    );
  }
}
