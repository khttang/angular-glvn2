'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Receipts', {
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
      receivedFrom: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      emailTo: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      sentEmail: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      regFee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      receivedBy: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      receivedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      regExempt: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      regReceipt: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      comment: {
        type: Sequelize.STRING(100),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Receipts');
  }
};
