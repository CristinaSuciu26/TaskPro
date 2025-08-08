import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  createCard,
  deleteCard,
  getCardsByColumn,
  updateCard,
} from "../controllers/cardController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cards
 *   description: Card management API
 */


/**
 * @swagger
 * /api/cards:
 *   post:
 *     summary: Create a new card
 *     tags: [Cards]
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
 *               - columnId
 *             properties:
 *               title:
 *                 type: string
 *                 example: My First Card
 *               description:
 *                 type: string
 *                 example: Details about the card
 *               columnId:
 *                 type: string
 *                 example: 64f4b1c7c29a2c1f1b3a9a88
 *               order:
 *                 type: number
 *                 example: 1
 *     responses:
 *       201:
 *         description: Card created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post("/", verifyToken, createCard);


/**
 * @swagger
 * /api/cards/{columnId}:
 *   get:
 *     summary: Get all cards for a column
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: columnId
 *         required: true
 *         schema:
 *           type: string
 *         description: Column ID
 *     responses:
 *       200:
 *         description: List of cards
 *       500:
 *         description: Server error
 */
router.get("/:columnId", verifyToken, getCardsByColumn);


/**
 * @swagger
 * /api/cards/{id}:
 *   put:
 *     summary: Update a card
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated card title
 *               description:
 *                 type: string
 *                 example: Updated card details
 *               order:
 *                 type: number
 *                 example: 2
 *     responses:
 *       200:
 *         description: Card updated successfully
 *       404:
 *         description: Card not found
 *       500:
 *         description: Server error
 */
router.put("/:id", verifyToken, updateCard);

/**
 * @swagger
 * /api/cards/{id}:
 *   delete:
 *     summary: Delete a card
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Card ID
 *     responses:
 *       200:
 *         description: Card deleted successfully
 *       404:
 *         description: Card not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", verifyToken, deleteCard);

export default router;
