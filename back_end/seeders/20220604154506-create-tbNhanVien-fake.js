'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbnhanviens', [{
       MaThongTinChung: 2,
       MaThe: 2,
       MaAcount:1,
       NgayHD: "2021-03-26 07:06:14",
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },
     {
      MaThongTinChung: 2,
      MaThe: 2,
      MaAcount:1,
      NgayHD: "2021-03-26 07:06:14",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },
    {
      MaThongTinChung: 2,
      MaThe: 2,
      MaAcount:1,
      NgayHD: "2021-03-26 07:06:14",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbnhanviens', null, {});
  }
};
