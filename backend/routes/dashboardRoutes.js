import express from "express";
import {
  createDashboard,
  deleteDashboard,
  getDashboards,
  updateDashboardBackground,
} from "../controllers/dashboardController.js";
import upload from "../middleware/multerConfig.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dashboards
 *   description: Dashboard management
 */

/**
 * @swagger
 * /api/dashboards:
 *   post:
 *     summary: Create dashboard
 *     tags: [Dashboards]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Dashboard created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/", verifyToken, createDashboard);

/**
 * @swagger
 * /api/dashboards:
 *   get:
 *     summary: Get all the dashboards
 *     tags: [Dashboards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of dashboards
 *       500:
 *         description: Internal server error
 */
router.get("/", verifyToken, getDashboards);

/**
 * @swagger
 * /api/dashboards/{id}:
 *   delete:
 *     summary: Delete a dashboard
 *     tags: [Dashboards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Dashboard ID
 *     responses:
 *       200:
 *         description: Dashboard deleted
 *       404:
 *         description: Dashboard not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", verifyToken, deleteDashboard);

/**
 * @swagger
 * /api/dashboards/{id}/background:
 *   put:
 *     summary: Update dashboard background (color, URL, or uploaded image)
 *     tags: [Dashboards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Dashboard ID
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               background:
 *                 type: string
 *                 description: Background color or image URL
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               background:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Dashboard background updated successfully
 *       404:
 *         description: Dashboard not found
 *       500:
 *         description: Server error
 */
router.put(
  "/:id/background",
  verifyToken,
  upload.single("file"),
  updateDashboardBackground
);

export default router;
