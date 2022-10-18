const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
// import user from "./src/controllers/user_controller.js";

const PORT = process.env.PORT;

require("dotenv").config();

