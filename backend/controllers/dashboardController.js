import { uploadImage } from "../middleware/uploadImage.js";
import Dashboard from "../models/Dashboard.js";

export const createDashboard = async (req, res) => {
  try {
    const { title, icon, background } = req.body;
    const userId = req.user.id;

    const dashboard = new Dashboard({
      title,
      icon: icon || undefined,
      background: background || undefined,
      owner: userId,
    });
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

export const updateDashboardBackground = async (req, res) => {
  try {
    const { background, icon, title } = req.body;
    let backgroundUrl = background;

    // Dacă a fost încărcat fișier, urcă-l pe Cloudinary
    if (req.file) {
      backgroundUrl = await uploadImage(req.file.path);
    }

    const updates = {};
    if (backgroundUrl) updates.background = backgroundUrl;
    if (icon) updates.icon = icon;
    if (title) updates.title = title;

    const dashboard = await Dashboard.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      updates,
      { new: true }
    );

    if (!dashboard) {
      return res.status(404).json({ message: "Dashboard not found" });
    }

    res.status(200).json({
      message: "Dashboard updated successfully",
      dashboard,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
