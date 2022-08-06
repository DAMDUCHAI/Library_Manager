'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */

     await queryInterface.bulkInsert('tbtinhtrangs', [{
       TinhTrang: 'Chua Tra',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
      },
      {
        TinhTrang: 'Da Tra',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       },
       {
        TinhTrang: 'Lam mat',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       }
    ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbtinhtrangs', null, {});
  }
};
