'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
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
      status: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      saintName: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      firstName: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      middleName: {
        type: Sequelize.STRING(16),
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false
      },
      vnClass: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      vnTag: {
        type: Sequelize.STRING(4),
        allowNull: true
      },
      glClass: {
        type: Sequelize.STRING(12),
        allowNull: true
      },
      glTag: {
        type: Sequelize.STRING(4),
        allowNull: true
      },
      baptismCert: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      communionCert: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      confirmationCert: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      hasBaptismCert: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      baptismDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      communionDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      confirmationDate: {
        type: Sequelize.DATE,
        allowNull: true
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
    return queryInterface.dropTable('Students');
  }
};
