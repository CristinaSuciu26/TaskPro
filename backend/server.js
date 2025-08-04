import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorMiddleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import authRoutes from "./routes/auth.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.get("/error-test", (req, res) => {
  throw new Error("Test error");
});


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
