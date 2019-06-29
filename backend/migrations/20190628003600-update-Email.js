'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Emails ADD CONSTRAINT custom_unique_constraint_email UNIQUE (address, type);")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE Emails DROP CONSTRAINT custom_unique_constraint_email;");
  }
};
