'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {


     await queryInterface.bulkInsert('tbphats', [
       {
       TienFat: 62.4,
       LyDo: 'Tra Sach Muon',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
      },
      {
        TienFat: 22.4,
        LyDo: 'Tra Sach Muon',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       },
       {
        TienFat: 12.4,
        LyDo: 'Tra Sach Muon',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
       },]);
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('tbphats', null, {});
  }
};
