'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbfeedbacks', [
       {
       NoiDung: 'Nhan Vien Ho tro nhiet tinh',
       TrangThai: false,
       MaDocGia: 1,
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },
     {
      NoiDung: 'He thong hoat dong rat tot',
      TrangThai: true,
      MaDocGia: 2,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },
    {
      NoiDung: 'Can mua them sach moi',
      TrangThai: true,
      MaDocGia: 1,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbfeedbacks', null, {});
  }
};
