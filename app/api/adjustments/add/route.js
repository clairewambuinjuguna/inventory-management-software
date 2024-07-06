import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, warehouseId, notes, referenceNumber } =
      await request.json();

    const adjustment = await db.addStockAdjustment        
    //  { addStockQty, receivingWarehouseId, notes };
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
