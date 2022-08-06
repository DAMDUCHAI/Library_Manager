'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbgioitinhs', [{
       NoiDung: 'Nam',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },
     {
      NoiDung: 'Nu',
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },
    {
      NoiDung: 'Khong Xac Ding',
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
