const users = require('express').Router()
const express = require("express");
const app = express()
const cors = require ('cors')
const pool = require("./db")
const db = require('./models')
const { User } = db
const { Op } = require('sequelize')

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
//SEARCH FOR USERS
app.get('/users/:username', async (req, res) => {
    let response = await pool.query(`http://localhost:5000/goalMates/users/${req.params.username}`)
    res.status(200).send(response.data)
})


// GET ALL USERS 
//not working 10/23
users.get('/users', async (req, res)=>{
    try {
        const foundUsers = await pool.query(
            // `SELECT * FROM users RETURNING *`
            {
            order: [ [ 'username', 'ASC' ] ],
            where: {
                username: { [Op.like]: `%${req.query.username ? req.query.username : ''}%` }
            }
        }
        )
        res.send(foundUsers)
        res.status(200).json(foundusers)
        console.log(res.body)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A NEW USER
// app.use("/register",  usersController)
app.post("/register", async (req, res) => {
    
    try {
        // const tests = JSON.stringify(req.body);
        // const { tests } = req.body
        // console.log(tests)
        // console.log(JSON.stringify(req.body))
        // console.log(res.body[0])
        req.body = {username} 
        console.log(username)
        // const { email } = email
        // const { password } = password
        // const { user_location } = = location
        // const [ {username}, {email}, {password}, {user_location} ] = req.body
        // console.log(username, email, password, user_location )

// the two lines below are WORKING
        // const userData = JSON.stringify(req.body)
        // console.log(userData)

        const newUser = await pool.query(
            `INSERT INTO users (username, email, password, user_location) 
            VALUES ('${username}', '${email}', '${password}','${user_location}');`

        // "INSERT INTO users (username, email, password, user_location) VALUES($1, $2, $3, $4) RETURNING *",
            // [{username}, {email}, {password}, {user_location}]
            )
            res.json(newUser);
            res.status(200).json({
                message: 'Successfully inserted a new user',
                data: newUser
            }
            )
            console.log(newUser)
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

