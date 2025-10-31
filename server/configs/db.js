require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in your .env file!");
}

const client = neon(process.env.DATABASE_URL);

module.exports = client;
