import Card from "../models/Card.js";

export const createCard = async (req, res) => {
  try {
    const { title, description, columnId, order } = req.body;

    if (!title || !columnId) {
      return res
        .status(400)
        .json({ message: "Title and columnId are required" });
    }

    const newCard = Card.create({ title, description, columnId, order });
    res.status(201).json({ message: "Card created", card: newCard });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const getCardsByColumn = async (req, res) => {
  try {
    const { columnId } = req.params;
    const cards = await Card.find({ columnId }).sort({ order: 1 });
    res.status(200).json({ cards });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedCard) {
      res.status(404).json({ message: "Card not found" });
    }

    res.status(200).json({ message: "Card updated", card: updatedCard });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
