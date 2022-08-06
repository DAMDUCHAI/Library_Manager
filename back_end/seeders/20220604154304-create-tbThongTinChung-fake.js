'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tbthongtinchungs', [{
        Ten: 'Duy Quyet',
        NgaySinh: "2021-03-26 07:06:14",
        MaGioiTinh: 1,
        CCCD: '0001',
        Phone: '0123456',
        DiaChi: 'Nam Dinh',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      },
      {
        Ten: 'Anh Dang',
        NgaySinh: "2021-03-26 07:06:14",
        MaGioiTinh: 2,
        CCCD: '0002',
        Phone: '0123456',
        DiaChi: 'Nghe An',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      },
      {
        Ten: 'Duc Tai',
        NgaySinh: "2021-03-26 07:06:14",
        MaGioiTinh: 1,
        CCCD: '0003',
        Phone: '0123456',
        DiaChi: 'Dien Chau',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      },]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbthongtinchungs', null, {});
  }
};
