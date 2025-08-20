import User from "../models/User.js";

export const updateTheme = async (req, res) => {
  try {
    const { theme } = req.body;

    if (!["light", "violet", "dark"].includes(theme)) {
      return res.ststus(400).json({ message: "Invalid theme option" });
    }

    const userId = req.user.id;
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { theme },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Theme updated successfully", theme: updateUser.theme });
  } catch (error) {
    res.status(500).json({ message: "Server error:", error: error.message });
  }
};
