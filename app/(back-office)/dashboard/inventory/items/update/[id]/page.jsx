import React from "react";
import NewBrand from "../../new/page";
import { getData } from "@/lib/getData";
import NewItem from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`brands/${id}`);
  console.log(data);
  return (
    <div>
      <NewItem initialData={data} isUpdate={true}/>
    </div>
  );
}
