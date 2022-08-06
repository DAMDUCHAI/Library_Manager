'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbfieusachchitiets', [{
       MaSach: 4,
       MaTinhTrang: 1,
       NgayTra: "2021-03-26 07:06:14",
       MaPhat: 1,
       MaFieuSach: 1,
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },{
      MaSach: 5,
      MaTinhTrang: 2,
      NgayTra: "2021-03-26 07:06:14",
      MaPhat: 2,
      MaFieuSach: 2,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },{
      MaSach: 6,
      MaTinhTrang: 3,
      NgayTra: "2021-03-26 07:06:14",
      MaPhat: 3,
      MaFieuSach: 3,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);
  },

  async down (queryInterface, Sequelize) {
  
     
     await queryInterface.bulkDelete('tbfieusachchitiets', null, {});
  }
};
