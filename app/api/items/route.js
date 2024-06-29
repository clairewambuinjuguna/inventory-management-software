import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const data = await request.json();
//  {
//       title,
//       categoryId,
//       sku,
//       barcode,
//       qty,
//       unitId,
//       brandId,
//       supplierId,
//       buyingPrice,
//       sellingPrice,
//       reOderPoint,
//       warehouseId,
//       imageUrl,
//       weight,
//       dimensions,
//       taxRate,
//       description,
//       notes,
//     }
    
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create the item",
      },
      { status: 500 }
    );
  }
}
