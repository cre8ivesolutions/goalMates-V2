const express = require("express");
const app = express()
const cors = require ('cors')
const pool = require("./db")
// const { Sequelize } = require("sequelize");
// const axios = require('axios')
require("dotenv").config();

//CONFIGURATION-MIDDLEWARE
app.use(cors())
app.use(express.json()) //this is req.body
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
app.post("/register", async (req, res) => {
    
    try {
        // const tests = JSON.stringify(req.body);
        // const { tests } = req.body
        // console.log(tests)
        // const [ {username}, {email}, {password}, {user_location} ] = userData
        // userData = req.body;
        // console.log(username, email, password, user_location)
// the two lines below are WORKING
        const userData = JSON.stringify(req.body)
        console.log(userData)
        
        // const newUser = await pool.query(
        //     "INSERT INTO users (userData) VALUES($1) RETURNING *",
        //     )
        //     res.json(newUser);
        //     res.status(200).json({
        //         message: 'Successfully inserted a new user',
        //         data: newUser
        //     }
        //     )
        //     console.log(newUser)
        //     console.log(userData);
        // console.log("user_controller post log" + req.body)
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

