"use client";
import TextInput from "@/app/(back-office)/components/Forminputs/TextInput";
import FormHeader from "@/app/(back-office)/components/dashboard/FormHeader";
import { Pencil, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Submitbutton from "@/app/(back-office)/components/Forminputs/Submitbutton";
import TextareaInput from "@/app/(back-office)/components/Forminputs/Textareainput";
import Multipleselect from "@/app/(back-office)/components/Forminputs/SelectInput";
import SelectInput from "@/app/(back-office)/components/Forminputs/SelectInput";
import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@uploadthing/react";
import Image from "next/image";
import ImageInput from "@/app/(back-office)/components/Forminputs/ImageInput";
import { makePostRequest } from "@/lib/apiRequest";

export default function CreateItemForm({
  categories,
  units,
  brands,
  warehouses,
  suppliers,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/items", data, "Item", reset);
    setImageUrl("")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 my-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Item Title"
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
        <SelectInput
          register={register}
          className="w-full"
          name="supplierId"
          label="Select the item Supplier"
          options={suppliers}
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
          label="Item tax Rate in %"
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
        {/* <div className="col-span-full">
            <div className="flex justify-between items-center mb-4">
              <label
                htmlFor="course-image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Item Image
              </label>
              {imageUrl && (
                <button
                  onClick={() => setImageUrl("")} //to remove the current image by setting the imageUrl to empty
                  type="button"
                  className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Change Image</span>
                </button>
              )}
            </div>
            {imageUrl ? (
              <Image   //if there is an image,get the image url and display it
                src={imageUrl}
                alt="Item image"
                width={1000}
                height={667}
                className="w-full h-64 object-cover"
              />
            ) : (
              <UploadDropzone
                endpoint="imageUploader" //if the image is not there,display the dropzone
                onClientUploadComplete={(res) => {
                  setImageUrl(res[0].url);
                  // Do something with the response
                  console.log("Files: ", res);
                  alert("Upload Completed");
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div> */}
        <ImageInput
          label="Item Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="imageUploader"
        />
      </div>
      <Submitbutton isLoading={loading} title="Item" />
    </form>
  );
}
