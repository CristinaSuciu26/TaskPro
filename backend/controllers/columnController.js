import Column from "../models/Column.js";

export const createColumn = async (req, res) => {
  try {
    const { title, dashboardId } = req.body;

    const column = await Column.create({ title, dashboardId });
    res.status(201).json({ message: "Column created", column });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const getColumnByDashboard = async (req, res) => {
  try {
    const { dashboardId } = req.params;

    const columns = await Column.find({ dashboardId });
    res.status(200).json(columns);
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const updateColumn = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updated = await Column.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );

    res.status(200).json({ message: "Column updated:", column: updated });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const deleteColumn = async (req, res) => {
  try {
    const { id } = req.params;

    await Column.findByIdAndDelete(id);
    res.status(200).json({ message: "Column deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};
