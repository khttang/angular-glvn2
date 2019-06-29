'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HouseHolds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fatherFirst: {
        type: Sequelize.STRING(16)
      },
      fatherLast: {
        type: Sequelize.STRING(16)
      },
      motherFirst: {
        type: Sequelize.STRING(16)
      },
      motherLast: {
        type: Sequelize.STRING(16)
      },
      address: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      postalCode: {
        type: Sequelize.STRING(10),
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
    return queryInterface.dropTable('HouseHolds');
  }
};

