import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { transferStockQty, receivingBranchId, notes } = await request.json();
    const { transferStockQty, receivingBranchId, notes } = await request.json();

    const warehouse = { transferStockQty, receivingBranchId, notes };
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to make warehouse",
      },
      { status: 500 }
    );
  }
}
