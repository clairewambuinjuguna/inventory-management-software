import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Units() {
  const units = await getData("units");

  const columns = ["title", "abbreviation"];
  return (
    <div>
      {/*header*/}
      <FixedHeader title="Units" newLink="/dashboard/inventory/units/new" />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={units} columns={columns} resourceTitle="units" />
      </div>
    </div>
  );
}
