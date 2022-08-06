'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tbsaches', [
        {
        Ten: 'Truyen Kieu',
        MaTacGia: 2,
        MaTheLoai: 2,
        MaNXB: 2,
        MaKeSach: 2,
        AnhSach: 'img/truyenkieu',
        NamXB: '2019',
        Gia: 13000,
        SoLgDauSach: 2,
        SoLgHienTai: 3,
        NoiDung: 'Truyen rat hay',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14"
      },
      {
        Ten: 'Van Hoa Viet Nam 2022',
        MaTacGia: 2,
        MaTheLoai: 2,
        MaNXB: 3,
        MaKeSach: 2,
        AnhSach: 'img/vanhoachinhtri',
        NamXB: '2022',
        Gia: 135000,
        SoLgDauSach: 4,
        SoLgHienTai: 1,
        NoiDung: 'Hieu biet ve van hoa Viet Nam',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14"
      },
      {
        Ten: 'Noi loi yeu thuong',
        MaTacGia: 2,
        MaTheLoai: 2,
        MaNXB: 1,
        MaKeSach: 2,
        AnhSach: 'img/truyenkieu',
        NamXB: '2019',
        Gia: 13000,
        SoLgDauSach: 4,
        SoLgHienTai: 3,
        NoiDung: 'Nhung cau noi hay ve tinh yeu',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14"
      },
    ]);
  
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('tbsaches', null, {});
    
  }
};
