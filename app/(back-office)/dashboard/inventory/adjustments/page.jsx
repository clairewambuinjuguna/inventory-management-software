import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Adjustments() {
  const addAdjustmentsData = getData("adjustments/add");
  const transferAdjustmentsData = getData("adjustments/transfer");

  const [addAdjustments, transferAdjustments] = await Promise.all([
    addAdjustmentsData,
    transferAdjustmentsData,
  ]);

  const addcolumns = ["referenceNumber", "addStockQty"];
  const transfercolumns = ["referenceNumber", "transferStockQty"];
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
        <h2 className="py-4 text-xt font-semibold">
          Stock Increment Adjustments
        </h2>
        <DataTable data={addAdjustments} columns={addcolumns} />
      </div>

      <div className="my-4 p-8">
        <h2 className="py-4 text-xt font-semibold">
          Stock Transfer Adjustments
        </h2>
        <DataTable data={transferAdjustments} columns={transfercolumns} />
      </div>
    </div>
  );
}
