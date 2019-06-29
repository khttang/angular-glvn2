'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Emails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      householdId: {
        type: Sequelize.INTEGER,
        model: 'HouseHolds',
        key: 'id',
        allowNull: false
      },
      studentId: {
        type: Sequelize.STRING(16),
        model: 'Students',
        key: 'id',
        allowNull: true
      },
      type: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      status: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Emails');
  }
};
