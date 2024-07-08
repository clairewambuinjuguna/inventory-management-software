"use client";
import TextInput from "@/app/(back-office)/components/Forminputs/TextInput";
import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";

import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Submitbutton from "@/app/(back-office)/components/Forminputs/Submitbutton";
import TextareaInput from "@/app/(back-office)/components/Forminputs/Textareainput";

import { makePostRequest } from "@/lib/apiRequest";
export default function NewSupplier() {
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
      "api/suppliers",
      data,
      "Supplier",
      reset
    );
  }

  return (
    <div>
      {/*header*/}
      <FormHeader title="New Supplier" href="/dashboard/inventory" />
      {/*Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Suppliers Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Email"
            name="email"
            register={register}
            errors={errors}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            type="email"
            className="w-full"
          />
          <TextInput
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
            type="email"
          />

          <TextareaInput
            label="Supplier Payment Terms"
            name="paymentTerms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <Submitbutton isLoading={loading} title="Supplier" />
      </form>
    </div>
  );
}
