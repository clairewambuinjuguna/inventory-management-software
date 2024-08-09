import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  try {
    const {
      addStockQty,
      receivingWarehouseId,
      notes,
      referenceNumber,
      itemId,
    } = await request.json();

    const adjustment = await db.addStockAdjustment.create({
      data: {
        addStockQty: parseInt(addStockQty),
        receivingWarehouseId,
        notes,
        referenceNumber,
        itemId,
      },
    });
    
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to add Stock",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const adjustments = await db.addStockAdjustment.findMany({
      orderBy: {
        createdAt: "desc", //latest adjustments
      },
    });
    return NextResponse.json(adjustments);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the adjustments ",
      },
      { status: 500 }
    );
  }
}
