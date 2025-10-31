const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { clerkMiddleware, requireAuth } = require("@clerk/express");
const port = process.env.PORT || 5000;
require("dotenv").config();

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use(requireAuth());

app.get("/", (req, res) => {
  res.send("StackPilot Server is Running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
