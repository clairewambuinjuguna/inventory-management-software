import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { addStockQty, warehouseId, notes, referenceNumber } =
      await request.json();

    const warehouse = {
      transferStockQty,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
    };
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a brand",
      },
      { status: 500 }
    );
  }
}
