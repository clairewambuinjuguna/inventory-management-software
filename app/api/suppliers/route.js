import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(request) {
  try {
    const {
      name,
      phone,
      email,
      address,
      notes,
      contactPerson,
      supplierCode,
      taxID,
      paymentTerms,
    } = await request.json();

    const supplier = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        notes,
        contactPerson,
        supplierCode,
        taxID,
        paymentTerms,
      },
    });
    console.log(supplier);
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a supplier",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const suppliers = await db.supplier.findMany({
      orderBy: {
        createdAt: "desc", //latest suppliers
      },
    });
    return NextResponse.json(suppliers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the supplier ",
      },
      { status: 500 }
    );
  }
}