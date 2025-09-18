import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "#ffffff",
    },
    icon: { type: String, default: null },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Column",
      },
    ],
  },
  { timestamps: true }
);

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

export default Dashboard;
