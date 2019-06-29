'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE HouseHolds ADD CONSTRAINT custom_unique_constraint_name UNIQUE (fatherFirst, fatherLast, motherFirst, motherLast);")
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query("ALTER TABLE HouseHolds DROP CONSTRAINT custom_unique_constraint_name;");
  }
};
