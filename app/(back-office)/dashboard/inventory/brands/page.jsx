import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Brands() {
  const brands = await getData("brands");
 
  const columns = ["title"];
  return (
    <div>
      {/*header*/}
      <FixedHeader
        title="Brands"
        newLink="/dashboard/inventory/brands/new"
      />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={brands} columns={columns} />
      </div>
    </div>
  );
}
