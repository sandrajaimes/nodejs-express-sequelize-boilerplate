'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Clients', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      birthDate: "1993-06-23 13:53:38",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        firstName: 'Stephanie',
        lastName: 'Miles',
        email: 'Stephanie.Miles@example.com',
        birthDate: "1993-06-23 13:53:38",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Cory',
        lastName: 'Williams',
        email: 'Cory.Williams@example.com',
        birthDate: "1993-06-23 13:53:38",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Clients', null, {});
  }
};
