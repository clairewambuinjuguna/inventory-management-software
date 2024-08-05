import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";
import React from "react";
import CreateItemForm from "@/app/(back-office)/components/dashboard/CreateItemForm";
import { getData } from "@/lib/getData";

export default async function NewItem() {
  // sequential fetching =>use await
  const categoriesData = getData("categories");
  const unitsData = getData("units");
  const brandsData = getData("brands");
  const warehousesData = getData("warehouse");
  const suppliersData = getData("suppliers");

  //parallel Fetching=> faster
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData,
  ]);

  return (
    <div>
      {/*header*/}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/*Form*/}
      <CreateItemForm
        categories={categories}
        units={units}
        brands={brands}
        warehouses={warehouses}
        suppliers={suppliers}
      />
    </div>
  );
}
