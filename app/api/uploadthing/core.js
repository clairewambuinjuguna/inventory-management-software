import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


export const ourFileRouter = {
  
  imageUploader: f({ image: { maxFileSize: "10MB" } })
    

    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url,metadata);

    }),
};
