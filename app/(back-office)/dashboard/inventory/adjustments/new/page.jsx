import React from "react";
import AdjustmentForm from "@/app/(back-office)/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";

export default async function NewAdjustments() {
 const itemsData= getData("items")
 const warehousesData= await getData("warehouse");
 const [items,warehouses]= await Promise.all([itemsData,warehousesData])
  return (
   <AdjustmentForm items={items} branches={warehouses}/>
  );
}
