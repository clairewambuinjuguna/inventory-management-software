import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  try {
    const itemData = await request.json();

    console.log(itemData);

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

export async function GET(request) {
  try {
    const items = await db.item.findMany({
      orderBy: {
        createdAt: "desc", //latest items
      },
      include: {
        category: true,
        supplier:true,
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the Items ",
      },
      { status: 500 }
    );
  }
}
