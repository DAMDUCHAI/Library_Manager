'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tbnhaxuatbans', [
      {
     Ten: 'Kim Dong',
      Phone: '0345617464',
      Email: 'kd@gmail.com',
      DiaChi: 'Bac Ninh',
      NguoiDaiDien:'Nguyen Kim Dong',
      createdAt: "2021-03-26 07:06:14",
     updatedAt: "2021-03-26 07:06:14"
   }
  ,
  {
    Ten: 'Tuoi Tre',
     Phone: '033618392',
     Email: 'ttm@gmail.com',
     DiaChi: 'Ha Noi',
     NguoiDaiDien:'Nguyen Tuoi Tre',
     createdAt: "2021-03-26 07:06:14",
     updatedAt: "2021-03-26 07:06:14"
  }
  ,
  {
    Ten: 'Van Hoa',
     Phone: '0399837464',
     Email: 'vh@gmail.com',
     DiaChi: 'Ho Chi Minh',
     NguoiDaiDien:'Nguyen Van Hoa',
     createdAt: "2021-03-26 07:06:14",
     updatedAt: "2021-03-26 07:06:14"
  }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbnhaxuatbans', null, {});

  }
};
