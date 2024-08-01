import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";
import React from "react";
import CreateItemForm from "@/app/(back-office)/components/dashboard/CreateItemForm";
import { getData } from "@/lib/getData";

export default async function NewItem() {
  const categories = await getData("categories");

  const units = await getData("units");
  const brands = await getData("brands");
  const warehouses = await getData("warehouse");
  const suppliers = await getData("suppliers");
  console.log(suppliers);

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
