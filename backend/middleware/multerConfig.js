import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "taskpro", 
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const parser = multer({ storage });

export default parser;
