import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { addStockQty, receivingWarehouseId, notes } = await request.json();

    const addstock = { addStockQty, receivingWarehouseId, notes };
    console.log(addstock);
    return NextResponse.json(addstock);
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
