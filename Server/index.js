const express = require("express");
const app = express()
const cors = require ('cors')
const pool = require("./db")
// const { Sequelize } = require("sequelize");
// const axios = require('axios')
require("dotenv").config();

//CONFIGURATION-MIDDLEWARE
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// const users = require ("./controllers/user_controller")
const usersController = require ("./controllers/user_controller")

// ROOT
//this route is working 10/23/22 use Postman GET http://localhost:5000/ to get the data
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the goalMates API'
    })
})

// CREATE A NEW USER
// app.use("/register",  usersController)
users.post('/register', async (req, res) => {
    try {
        const { username, email, password, user_location } = req.body;
        const newUser = await User.query(
            "INSERT INTO users (username, email, password, user_location) VALUES($1, $2, $3, $4) RETURNING *", 
            [{username}, {email}, {password}, {user_location}]
        )
        res.json(newUser);
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser,
        })
        console.log("user_controller post log" + req.body)
    } catch(err) {
        res.status(500).json(err)
    }
})


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

app.listen(5000, () => {
    console.log(`Goalin' on port: ${process.env.PORT}`)
})

