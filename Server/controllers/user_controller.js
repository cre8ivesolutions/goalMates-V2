// DEPENDENCIES
const user = require('express').Router()
const db = require('../models')
const { User } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await users.findAll({
           
            order: [ [ 'username','ASC' ] ],
            where: {
                username: { [Op.like]: `%${req.query.username ? req.query.username : ''}%` }
            }
           
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC USER
users.get('/:username', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { name: req.params.name },
            include: [ 
                { 
                model: User, 
                }],
                order: [
                    DESC
                ]
            
            })
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A USER
users.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})
// UPDATE A USER
users.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUser} User`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER
users.delete('/:id', async (req, res) => {
    try {
        const deletedUsers = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} user`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = user