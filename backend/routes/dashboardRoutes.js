import express from "express";
import {
  createDashboard,
  deleteDashboard,
  getDashboards,
} from "../controllers/dashboardController.js";
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

export default router;
