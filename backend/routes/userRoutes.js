import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { updateTheme } from "../controllers/userController.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Theme
 *   description: Theme update
 */

/**
 * @swagger
 * /api/users/theme:
 *   put:
 *     summary: Update user theme
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - theme
 *             properties:
 *               theme:
 *                 type: string
 *                 enum: [light, violet, dark]
 *     responses:
 *       200:
 *         description: Theme updated successfully
 *       400:
 *         description: Invalid theme option
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */

router.put("/theme", verifyToken, updateTheme);

export default router;
