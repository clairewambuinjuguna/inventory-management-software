import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  const data = suppliers.map((obj) => {
    return {
      title: obj.title,
      phone: obj.phone,
      email: obj.email,
    };
  });
  const columns = ["title", "phone","email",];
  return (
    <div>
      {/*header*/}
      <FixedHeader
        title="Suppliers"
        newLink="/dashboard/inventory/suppliers/new"
      />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
