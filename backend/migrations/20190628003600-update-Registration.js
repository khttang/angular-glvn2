'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Registrations ADD CONSTRAINT custom_unique_constraint_registration UNIQUE (studentId, year);")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Registrations DROP CONSTRAINT custom_unique_constraint_registration;");
  }
};
