import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Items() {
  const items = await getData("items");

  const columns = ["title", "sellingPrice"];
  return (
    <div>
      {/*header*/}
      <FixedHeader title="Items" newLink="/dashboard/inventory/items/new" />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={items} columns={columns} />
      </div>
    </div>
  );
}
