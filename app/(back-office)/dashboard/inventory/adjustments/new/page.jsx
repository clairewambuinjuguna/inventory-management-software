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
export default function NewAdjustments() {
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
      const response = await fetch(`${baseUrl}/api/adjustments`, {
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
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />
      {/*Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Enter Amount of stock to transfer"
            name="transferStockQty"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <SelectInput
            register={register}
            className="w-full"
            name="receivingBranchId"
            label="Select the Branch to receive the stock"
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
    </div>
  );
}
