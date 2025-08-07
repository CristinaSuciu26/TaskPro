import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createColumn,
  deleteColumn,
  getColumnByDashboard,
  updateColumn,
} from "../controllers/columnController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Columns
 *   description: Endpoints for managing columns
 */

/**
 * @swagger
 * /api/columns:
 *   post:
 *     summary: Create a new column
 *     tags: [Columns]
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
 *               - dashboardId
 *             properties:
 *               title:
 *                 type: string
 *               dashboardId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Column created
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post("/", verifyToken, createColumn);

/**
 * @swagger
 * /api/columns/{dashboardId}:
 *   get:
 *     summary: Get all columns for a dashboard
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: dashboardId
 *         required: true
 *         schema:
 *           type: string
 *         description: Dashboard ID
 *     responses:
 *       200:
 *         description: List of columns
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.get("/:dashboardId", verifyToken, getColumnByDashboard);

/**
 * @swagger
 * /api/columns/{id}:
 *   put:
 *     summary: Update a column
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Column ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               order:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Column updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Column not found
 *       500:
 *         description: Server error
 */

router.put("/:id", verifyToken, updateColumn);

/**
 * @swagger
 * /api/columns/{id}:
 *   delete:
 *     summary: Delete a column
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Column ID
 *     responses:
 *       200:
 *         description: Column  deleted
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.delete("/:id", verifyToken, deleteColumn);

export default router;
