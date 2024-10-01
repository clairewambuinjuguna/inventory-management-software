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
import toast from "react-hot-toast";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewBrand({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.replace("/dashboard/inventory/brands");
  }

  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      //Update request
      makePutRequest(
        setLoading,
        `api/brands/${initialData.id}`,
        data,
        "Brand",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/brands", data, "Brand", reset);
    }
  }

  return (
    <div>
      {/*header*/}
      <FormHeader
        title={isUpdate ? "Update Brand" : "New Brand"}
        href="/dashboard/inventory/brands"
      />
      {/*Form*/}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <Submitbutton
          isLoading={loading}
          title={isUpdate ? "Updated Brand" : "New Brand"}
        />
      </form>
    </div>
  );
}
