const express = require("express");
const app = express()
const cors = require ('cors')
const pool = require("./db")
// const { Sequelize } = require("sequelize");
// const axios = require('axios')
require("dotenv").config();

//Configureation / Middleware
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// const users = require ("./controllers/user_controller")
const usersController = require ("./controllers/user_controller")

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the goalMates API'
    })
})

app.use("/register",  usersController)

// app.get('/', async (req, res) => {
//     let response = await axios.get(`https://postgres:password@localhost:5432/goalMates/lookup?username=${req.params.username}`)
//     res.status(200).send(response.data)
// })


// app.get('/:username', async (req, res) => {
//     let response = await axios.get(`https://postgres:password@localhost:5432/goalMates/lookup?username=${req.params.username}`)
//     res.status(200).send(response.data)
// })


// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }


// app.get('*', (req, res) => {
//     res.status(404).send('404: Not Found')
// })

// app.listen(process.env.PORT || 5432, () => console.log(`Listening on ${process.env.PORT || 5432}`))

app.listen(process.env.PORT, () => {
    console.log(`Goalin' on port: ${process.env.PORT}`)
})

