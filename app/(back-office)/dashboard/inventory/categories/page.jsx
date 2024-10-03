import DataTable from "@/app/(back-office)/components/dashboard/DataTable";
import FixedHeader from "@/app/(back-office)/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Categories() {
  const categories = await getData("categories");
  
  const columns =["title","description",]
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
        <DataTable data={categories} columns={columns} resourceTitle="categories" />
      </div>
    </div>
  );
}
