import React from "react";
import NewBrand from "../../new/page";
import { getData } from "@/lib/getData";
import NewCategory from "../../new/page";

export default async function Update({ params: { id } }) {
  const data = await getData(`categories/${id}`);
  console.log(data);
  return (
    <div>
      <NewCategory initialData={data} isUpdate={true}/>
    </div>
  );
}
