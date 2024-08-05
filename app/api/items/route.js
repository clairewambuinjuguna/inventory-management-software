import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  try {
    const itemData = await request.json();

    console.log(itemData);

    // const reOrderPoint = parseInt(itemData.reOrderPoint);
    // if (isNaN(reOrderPoint)) {
    //   throw new Error("Invalid reOrderPoint value");
    // }
    const item = await db.item.create({
      data: {
        title: itemData.title,
        categoryId: itemData.categoryId,
        sku: itemData.sku,
        barcode: itemData.barcode,
        quantity: parseInt(itemData.qty),
        unitId: itemData.unitId,
        brandId: itemData.brandId,
        supplierId: itemData.supplierId,
        buyingPrice: parseFloat(itemData.buyingPrice),
        sellingPrice: parseFloat(itemData.sellingPrice),
        reOrderPoint: parseInt(itemData.reOrderPoint),
        warehouseId: itemData.warehouseId,
        imageUrl: [itemData.imageUrl],
        weight: parseFloat(itemData.weight),
        dimensions: itemData.dimensions,
        taxRate: parseFloat(itemData.taxRate),
        description: itemData.description,
        notes: itemData.notes,
      },
    });
    return NextResponse.json(item);
  } catch (error) {
    console.log("Error creating item:", error.meta);

    return NextResponse.json(
      {
        error: error.message,
        details: error.meta,
        message: "Failed to create the item",
      },
      { status: 500 }
    );
  }
}
