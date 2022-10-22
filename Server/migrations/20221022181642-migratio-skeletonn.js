'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('migrationTests', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      migrationId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'migrationTambles',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('migrationTests');
  }
};
