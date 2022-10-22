const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const users = require ("./controllers/user_controller")

// const axios = require('axios')
// const cors = require ('cors')
// const PORT = process.env.PORT;
// const PG_URI = process.env.PG_URI;

//Configureation / Middleware
require("dotenv").config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the goalMates API'
    })
})

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize({
//     storage: process.env.PG_URI,
//     dialect: 'postgres',
//     username: 'postgres',
//     password: 'password'
// })

const usersController = require ("./controllers/user_controller")
app.use("/users", usersController)

//     res.status(200).send('Please use a different search term')
// })


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

