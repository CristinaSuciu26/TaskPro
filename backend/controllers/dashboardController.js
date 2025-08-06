import Dashboard from "../models/Dashboard.js";

export const createDashboard = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.id;

    const dashboard = new Dashboard({ title, owner: userId });
    await dashboard.save();

    res.status(201).json({ message: "Dashboard created", dashboard });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const getDashboards = async (req, res) => {
  try {
    const userId = req.user.id;
    const dashboard = await Dashboard.find({ owner: userId });
    res.status(200).json({ dashboard });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};

export const deleteDashboard = async (req, res) => {
  try {
    const dashboardId = req.params.id;
    await Dashboard.findByIdAndDelete(dashboardId);

    res.status(200).json({ message: "Dashboard deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};
