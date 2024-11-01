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
import { makePostRequest } from "@/lib/apiRequest";
import toast from "react-hot-toast";
export default function NewWarehouse() {
  const selectOptions = [
    {
      title: "Main",
      id: "main",
    },
    {
      title: "Branch",
      id: "branch",
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
    
    
    makePostRequest(
      setLoading,
      "api/warehouse",
      data,
      "Warehouse",
      reset
    );
  }
  
  return (
    <div>
      {/*header*/}
      <FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse" />
      {/*Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            register={register}
            className="w-full"
            name="type"
            label="Select the warehouse type"
            options={selectOptions}
          />
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
          />
          <div className="sm:col-span-2">
            <TextareaInput
              label="Warehouse Description"
              name="description"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <Submitbutton isLoading={loading} title="Warehouse" />
      </form>
    </div>
  );
}
