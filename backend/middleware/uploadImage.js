import cloudinary from "../config/cloudinaryConfig.js";
import fs from "fs";

export const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "uploads", // optional
      use_filename: true,
      unique_filename: false,
    });

    // Delete the local file after successful upload
    fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Image upload failed");
  }
};
