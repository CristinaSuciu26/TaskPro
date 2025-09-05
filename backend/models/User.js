import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    image: { type: String },
    theme: {
      type: String,
      enum: ["light", "violet", "dark"],
      default: "light",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
