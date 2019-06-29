'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Registrations', {
      studentId: {
        type: Sequelize.STRING(16),
        model: 'Students',
        key: 'id',
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gradeLevel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      glClass: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      vnClass: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      glTag: {
        type: Sequelize.STRING(4),
        allowNull: true
      },
      vnTag: {
        type: Sequelize.STRING(4),
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      receivedBy: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      reviewedBy: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      comments: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      receivedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      reviewedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Registrations');
  }
};
