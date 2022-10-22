const express = require("express");
const app = express()
const cors = require ('cors')
const pool = require("./db")
// const { Sequelize } = require("sequelize");
// const axios = require('axios')

//Configureation / Middleware
require("dotenv").config();
const users = require ("./controllers/user_controller")
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

const usersController = require ("./controllers/user_controller")

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the goalMates API'
    })
})

app.use("/register",  usersController)

// app.get('/', async (req, res) => {
//     let response = await axios.get(`https://postgres:password@localhost:4000/goalMates/lookup?username=${req.params.username}`)
//     res.status(200).send(response.data)
// })


// app.get('/:username', async (req, res) => {
//     let response = await axios.get(`https://postgres:password@localhost:4000/goalMates/lookup?username=${req.params.username}`)
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

// app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))

app.listen(process.env.PORT, () => {
    console.log(`Goalin' on port: ${process.env.PORT}`)
})

