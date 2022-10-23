'use strict'

// Have Empty Tables Before Running

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userSaved = await queryInterface.bulkInsert('users', [
      {
      user_id: 1,
      username: 'Seeder Name',
      email: 'seeder@email.com',
      password: "password",
      user_location: "Seed location"
    },
      {
      user_id: 2,
      username: 'Tammy',
      email: 'tammy@email.com',
      password: "password",
      user_location: "tammys location"
    },
      {
      user_id: 3,
      username: 'Kevin',
      email: 'kevin@email.com',
      password: "password",
      user_location: "kevins location"
    },
      {
      user_id: 4,
      username: 'Crystal',
      email: 'crystal@email.com',
      password: "password",
      user_location: "Crystals location"
    }
  ])},

    // const eventSaved = await queryInterface.bulkInsert('events', [{
    //   name: "Lolla",
    //   date: "2022-01-17T04:33:12.000Z",
    //   start_time: "2022-01-17T01:33:12.000Z",
    //   end_time: "2022-01-17T20:33:12.000Z"
    // }])

    // const meetGreetSaved = await queryInterface.bulkInsert('meet_greets', [{
    //   event_id: 1,
    //   band_id: 1,
    //   meet_start_time: "2022-01-17T05:33:12.000Z",
    //   meet_end_time: "2022-01-17T06:33:12.000Z"
    // }])

    // const stageSaved = await queryInterface.bulkInsert('stages', [{
    //   stage_name: "Main Stage"
    // }])

    // const setTimeSaved = await queryInterface.bulkInsert('set_times', [{
    //   event_id: 1,
    //   stage_id: 1,
    //   band_id: 1,
    //   start_time: "2022-01-17T15:33:12.000Z",
    //   end_time: "2022-01-17T16:33:12.000Z"
    // }])

    // const stageEventSaved = await queryInterface.bulkInsert('stage_events', [{
    //   stage_id: 1,
    //   event_id: 1
    // }])
    

  // },
  
  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the userss table
    await queryInterface.bulkDelete('users', null, {})
  }
}

// //to get the seed data, in the terminal run:
// // sequelize seed:generate --name bands
// //or
// // sequelize db:seed:all