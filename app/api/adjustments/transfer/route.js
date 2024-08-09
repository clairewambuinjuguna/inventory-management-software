import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  try {
    const {
      transferStockQty,
      givingWarehouseId,
      notes,
      receivingWarehouseId,
      referenceNumber,
      itemId,
    } = await request.json();

    const adjustment = await db.transferStockAdjustment.create({
      data: {
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
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
        message: "Failed to make adjustment",
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const adjustments = await db.transferStockAdjustment.findMany({
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