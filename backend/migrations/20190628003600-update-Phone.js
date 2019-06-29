'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Phones ADD CONSTRAINT custom_unique_constraint_phone UNIQUE (number, type);")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Phones DROP CONSTRAINT custom_unique_constraint_phone;");
  }
};
