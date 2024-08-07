import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Categories() {
  const categories = await getData("categories");
  const data = categories.map(obj => {
    return {
      title: obj.title,
      description: obj.description,
    };
  });
  const columns =["title","description"]
  return (
    <div>
      {/*header*/}
      <FixedHeader
        title="Categories"
        newLink="/dashboard/inventory/categories/new"
      />
      {/*Form*/}
      {/* table */}
      <div className="my-4 p-8">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
