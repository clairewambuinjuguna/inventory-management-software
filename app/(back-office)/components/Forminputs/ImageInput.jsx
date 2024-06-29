import React from "react";
import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
// setImageUrl(res[0].url);
export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  endpoint = "imageUploader",
  className = "col-span-full",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
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
        <Image //if there is an image,get the image url and display it
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-cover"
        />
      ) : (
        <UploadDropzone
          endpoint={endpoint} //if the image is not there,display the dropzone
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
    </div>
  );
}
