const express = require("express");
const { auth } = require("../middlewares/auth");
const { generateArticle } = require("../controllers/aiController");

const aiRouter = express.Router();

aiRouter.post("/generateArticle", auth, generateArticle);

module.exports = aiRouter;
