'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        username: {
          type: DataTypes.STRING,
          allowNull: false
      },
        email: {
          type: DataTypes.STRING,
          allowNull: false
      },
        password: {
          type: DataTypes.STRING,
          allowNull: false
      },
        user_location: {
              type: DataTypes.STRING,
              allowNull: false
          },
        // join_date: {
        //   type: DataTypes.TIMESTAMP,
        //   allowNull: false
          //this will be equal to the date on the timestamp
        // },
        // profile_pic: {
          //alternatively this could be a web address for a photo
          // default photo web address: https://images.unsplash.com/photo-1556690171-9f6645f4455e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80
        //   type: DataTypes.IMAGE, 
        //   allowNull: true
        // },
        // bio: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true
    })
    return User
  }