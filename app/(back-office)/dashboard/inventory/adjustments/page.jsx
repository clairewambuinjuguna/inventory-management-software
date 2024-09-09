import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Adjustments() {
  const addAdjustments = await getData("adjustments/add");

  const columns = ["referenceNumber", "addStockQty"];
  return (
    <div>
      {/*header*/}
      <FixedHeader
        title="Adjustments"
        newLink="/dashboard/inventory/adjustments/new"
      />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={addAdjustments} columns={columns} />
      </div>
    </div>
  );
}
