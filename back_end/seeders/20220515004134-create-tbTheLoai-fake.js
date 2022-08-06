'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tbtheloais', [
        {
       Ten: 'Ngon Tinh',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
      },
      {
        Ten: 'Thieu Nhi',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       },
       {
        Ten: 'Nghe Thuat',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       },
    ]);
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('tbtheloais', null, {});
  }
};
