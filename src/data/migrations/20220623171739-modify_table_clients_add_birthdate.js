'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Clients', 'birthdate', { type: Sequelize.DATE, allowNull: false });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Clients', 'birthdate');
  }
};
