import mongoose from "mongoose";

const columnSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dashboardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dashboard",
      required: true,
    },
  },
  { timestamps: true }
);
const Column = mongoose.model("Column", columnSchema);
export default Column;
