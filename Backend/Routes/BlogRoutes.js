const express = require("express");

// Router Import
const router = express.Router();

// Controller Imports
const {
  protect,
} = require("../Controllers/UserControllers/UserAuthController");

// Controller Import for blog operations
const {
  createBlogPost,
  viewBlogPost,
  //   viewAllMyBlogPosts,
  //   deleteBlogPost,
  //   updateBlogPost,
} = require("../Controllers/UserControllers/BlogController");

//  Create A Blog Post
router.post("/", protect, createBlogPost);

// View Blog Post By ID
router.get("/:id", protect, viewBlogPost);

// View All My Blogs
// router.get("/myblogs", protect, viewAllMyBlogPosts);

// // Delete Blog Post
// router.delete("/:id", protect, deleteBlogPost);

// Update Blog Post
// router.patch("/:id", protect, updateBlogPost);

module.exports = router;
