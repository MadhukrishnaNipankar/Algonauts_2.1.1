// Model Imports
const Profile = require("../../Models/UserModel/ProfileModel");

// Utility function which filters only the allowed data for updation
const filterObjectForUpdation = (obj, ...allowedFields) => {
  const newObject = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObject[el] = obj[el];
  });

  return newObject;
};
// User Account Updation
/*
Expected request object sample:
{
  "profilePhotoURL": "https://example.com/profile.jpg",
  "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "links": [
    "https://linkedin.com/user123",
    "https://github.com/user123"
  ],
  "pastExperiences": [
    {
      "jobTitle": "Software Engineer",
      "company": "ABC Company",
      "duration": "2020 - 2022",
      "description": "Worked on developing web applications using React and Node.js."
    },
    {
      "jobTitle": "Intern",
      "company": "XYZ Inc.",
      "duration": "2019",
      "description": "Assisted in testing and debugging code for mobile applications."
    }
  ],
  "skills": ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  "interests": ["Reading", "Traveling", "Photography"]
}


*/
exports.updateUserProfile = async (req, res) => {
  try {
    // Only take allowed fields for profile updation
    const filteredBody = filterObjectForUpdation(
      req.body,
      "profilePhotoURL",
      "bio",
      "links",
      "pastExperiences",
      "skills",
      "interests"
    );

    // Find the user's profile
    let userProfile = await Profile.findOne({ user: req.user.id });

    // If no profile exists, create one
    if (!userProfile) {
      const newProfileData = {
        user: req.user.id,
        // Set default values for other profile fields if necessary
      };
      userProfile = await Profile.create(newProfileData);
    }

    // Update the profile data
    const updatedProfile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      filteredBody,
      {
        new: true,
        runValidators: true,
      }
    );

    // Sending successful response
    return res.status(200).json({
      status: "success",
      data: updatedProfile,
      message: "Profile updated successfully!",
    });
  } catch (exception) {
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Something went wrong at our side!",
      exception: exception.message,
    });
  }
};

// View User Profile
exports.viewUserProfile = async (req, res) => {
  try {
    // Check if the user ID is valid
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        status: "fail",
        data: null,
        message: "Invalid user ID provided.",
      });
    }

    // Find the user profile by user ID, along with associated user details
    const userProfile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      "name emailId phoneNumber"
    );

    // If the profile doesn't exist, return a 404 error
    if (!userProfile) {
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "User profile not found.",
      });
    }

    // If the profile exists, return it in the response along with user details
    return res.status(200).json({
      status: "success",
      data: {
        ...userProfile.toObject(),
        name: userProfile.user.name,
        emailId: userProfile.user.emailId,
        phoneNumber: userProfile.user.phoneNumber,
      },
      message: "Profile fetched successfully!",
    });
  } catch (exception) {
    // If an error occurs, return a 500 error
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Something went wrong at our side!",
      exception: exception.message,
    });
  }
};
