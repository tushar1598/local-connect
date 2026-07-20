import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const getResourceType = (mimeType: string) => {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  return "raw"; // pdf, docs, etc
};

export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  folder: string,
  mimeType: string,
  fileName?: string,
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    try {
      const resourceType = getResourceType(mimeType);

      const stream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: resourceType,
          public_id: fileName
            ? `${Date.now()}-${fileName.split(".")[0]}`
            : undefined,
        },
        (error, result) => {
          if (error) {
            console.error("❌ CLOUDINARY ERROR:", error);
            return reject(error);
          }

          resolve(result!);
        },
      );

      streamifier.createReadStream(fileBuffer).pipe(stream);
    } catch (err) {
      reject(err);
    }
  });
};
