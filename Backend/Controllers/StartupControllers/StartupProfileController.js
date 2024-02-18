const SProfile = require("../../Models/StartupModel/ProfileModel");

exports.viewStartupProfile = async (req, res) => {
  try {
    const id = req.user.id; // Assuming the ID is sent as a route parameter

    // Find the startup profile using the ID
    const startupProfile = await SProfile.find({ user: id });

    if (!startupProfile) {
      return res.status(404).json({ message: "Startup profile not found" });
    }

    return res.status(200).json({
      status: "success",
      message: "Startup profile found",
      data: startupProfile,
    });
  } catch (error) {
    console.error("Error viewing startup profile:", error);
    return res.status(500).json({
      message: "Failed to view startup profile",
      error: error.message,
    });
  }
};

exports.updateStartupProfile = async (req, res) => {
  try {
    const id = req.user.id; // Assuming the ID is sent in the request body
    const updates = req.body; // Assuming updates are sent in the request body

    // Find the startup profile using the ID and update it
    let startupProfile = await SProfile.findOneAndUpdate(
      { user: id },
      updates,
      {
        new: true, // Return the modified document rather than the original
      }
    );

    // Check if the startup profile exists
    if (!startupProfile) {
      return res.status(404).json({ message: "Startup profile not found" });
    }

    // If the startup profile was successfully updated, return a success response
    return res.status(200).json({
      status: "success",
      message: "Startup profile updated successfully",
      data: startupProfile,
    });
  } catch (error) {
    console.error("Error updating startup profile:", error);
    return res.status(500).json({
      message: "Failed to update startup profile",
      error: error.message,
    });
  }
};
