// Model Imports
const Blog = require("../../Models/UserModel/BlogModel");

// Create A Blog Post
// Create A Blog Post
exports.createBlogPost = async (req, res) => {
  try {
    // Extract data from the request body
    const { title, category, content, tags, comments } = req.body;

    // Validate required fields
    if (!title || !category || !content) {
      return res.status(400).json({
        status: "fail",
        data: null,
        message: "Title, category, and content are required fields.",
      });
    }

    // Use the ObjectId of the authenticated user as the author
    const author = req.user.id; // Assuming userId is the ObjectId of the authenticated user

    // Set publishingTime to current timestamp
    const publishingTime = Date.now();

    // Create a new blog post
    const newBlogPost = await Blog.create({
      title,
      category,
      content,
      tags,
      author,
      comments,
      publishingTime,
    });

    // Return success response
    return res.status(201).json({
      status: "success",
      data: newBlogPost,
      message: "Blog post created successfully!",
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Something went wrong while creating the blog post.",
      error: error.message,
    });
  }
};
// View Blog Post By ID
exports.viewBlogPost = async (req, res) => {
  try {
    // Extract blog ID from request parameters
    const { id } = req.params;
    // If blog post not found, return 404 error
    if (!id) {
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "Blog id is required",
      });
    }

    // Find the blog post by ID
    const blogPost = await Blog.findById(id);

    // If blog post not found, return 404 error
    if (!blogPost) {
      return res.status(404).json({
        status: "fail",
        data: null,
        message: "Blog post not found.",
      });
    }

    // Return the blog post
    return res.status(200).json({
      status: "success",
      data: blogPost,
      message: "Blog post fetched successfully!",
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return res.status(500).json({
      status: "fail",
      data: null,
      message: "Something went wrong while fetching the blog post.",
      error: error.message,
    });
  }
};


