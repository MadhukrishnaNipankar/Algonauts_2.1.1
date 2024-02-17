const express = require("express");
const app = express();
const cors = require("cors");

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

// Routes Import
const userRoutes = require("./Routes/UserRoutes");

const connectDb = require("./Config/db");

// Adding Config File Contents to process
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

// Defining API's
app.use("/api/v1/user", userRoutes);

// Database Connection
connectDb(CONNECTION_STRING);

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
