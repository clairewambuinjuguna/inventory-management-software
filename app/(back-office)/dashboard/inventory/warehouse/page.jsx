import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Warehouses() {
  const warehouses = await getData("warehouse");

  const columns = ["title", "location", "warehouseType"];
  return (
    <div>
      {/*header*/}
      <FixedHeader title="Warehouse" newLink="/dashboard/inventory/warehouse/new" />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={warehouses} columns={columns} />
      </div>
    </div>
  );
}
