"use client";
import TextInput from "@/app/(back-office)/components/Forminputs/TextInput";
import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Submitbutton from "@/app/(back-office)/components/Forminputs/Submitbutton";
import TextareaInput from "@/app/(back-office)/components/Forminputs/Textareainput";
import Multipleselect from "@/app/(back-office)/components/Forminputs/SelectInput";
import SelectInput from "@/app/(back-office)/components/Forminputs/SelectInput";
export default function NewItem() {
  const categories = [
    {
      label: "Electronics",
      value: "ertyujsdfg",
    },
    {
      label: "Clothes",
      value: "qwertyuisdfgsdfg",
    },
  ];
  const units = [
    {
      label: "Kg",
      value: "ertyujsdfg",
    },
    {
      label: "Pcs",
      value: "qwertyuisdfgsdfg",
    },
  ];
  const brands = [
    {
      label: "HP",
      value: "ertyujsdfg",
    },
    {
      label: "Dell",
      value: "qwertyuisdfgsdfg",
    },
  ];
  const warehouses = [
    {
      label: "Warehouse A",
      value: "ertyujsdfg",
    },
    {
      label: "Warehouse B",
      value: "qwertyuisdfgsdfg",
    },
    {
      label: "Warehouse C",
      value: "qwertyuisdfgsdfg",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response);
        reset();
        setLoading(false);
      }
    } catch (error) {
      setLoading(false); //if there are errors,set loading to false
      console.log(error);
    }
  }

  return (
    <div>
      {/*header*/}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/*Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            register={register}
            className="w-full"
            name="categoryId"
            label="Select the Item category"
            options={categories}
          />

          <TextInput
            label="Item SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item Quantity"
            name="qty"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            register={register}
            className="w-full"
            name="unitId"
            label="Select the item unit"
            options={units}
          />
          <SelectInput
            register={register}
            className="w-full"
            name="brandId"
            label="Select the item brand"
            options={brands}
          />
          <TextInput
            label="Buying Price"
            name="buyingPrice"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            label="Selling Price"
            name="sellingPrice"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            label="Re-order Point"
            name="reOrderPoint"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
     
          <SelectInput
            register={register}
            className="w-full"
            name="warehouseId"
            label="Select the item warehouse"
            options={warehouses}
          />
          <TextInput
            label="Item Weight in Kgs"
            name="weight"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            label="Item Dimensions in cm (20 x 30 x 100)"
            name="dimensions"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Item tax Ratein %"
            name="taxRate"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextareaInput
            label="Item Description"
            name="description"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Item notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <Submitbutton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
