import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import columnRoutes from "./routes/columnRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import path from "path";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://cristinasuciu26.github.io"], // frontend local și live
    credentials: true,
  })
);
app.options(
  "*",
  cors({
    origin: ["http://localhost:3000", "https://cristinasuciu26.github.io"],
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.use("/api/dashboards", dashboardRoutes);
app.use("/api/columns", columnRoutes);
app.use("/api/cards", cardRoutes);
app.use("/api/users", userRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.get("/error-test", (req, res) => {
  throw new Error("Test error");
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
