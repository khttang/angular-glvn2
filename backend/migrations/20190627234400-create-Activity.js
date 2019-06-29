'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actorId: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      actorRole: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      subjectId: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      subjectType: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      activityType: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      activityJson: {
        type: Sequelize.STRING(1048),
        allowNull: false
      },
      activityDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Activities');
  }
};
