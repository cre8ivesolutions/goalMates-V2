const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const PORT = process.env.PORT;
// import user from "./src/controllers/user_controller.js";

//Configureation / Middleware
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'password'
  })

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the goalMates API Server'
    })
})



