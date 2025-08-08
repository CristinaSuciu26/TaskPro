import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    columnId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Card", cardSchema);
