"use client";
import TextInput from "@/app/(back-office)/components/Forminputs/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Submitbutton from "@/app/(back-office)/components/Forminputs/Submitbutton";
import TextareaInput from "@/app/(back-office)/components/Forminputs/Textareainput";
import SelectInput from "@/app/(back-office)/components/Forminputs/SelectInput";
export default function AddInventoryForm() {
  const branches = [
    {
      label: "Branch A",
      value: "RTYU",
    },
    {
      label: "Branch B",
      value: "werty",
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
      const response = await fetch(`${baseUrl}/api/adjustments/add`, {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Enter Quantity of stock to add"
          name="addStockQty"
          register={register}
          errors={errors}
          className="w-full"
          type="number"
        />
        <SelectInput
          register={register}
          className="w-full"
          name="receivingWarehouseId"
          label="Select the Warehouse to receive the stock"
          options={branches}
        />

        <div className="sm:col-span-2">
          <TextareaInput
            label="Adjustment Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <Submitbutton isLoading={loading} title="Adjustment" />
    </form>
  );
}
