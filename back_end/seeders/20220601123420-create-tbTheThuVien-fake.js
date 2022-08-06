'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('tbthethuviens', [{
         NgayCap: "2021-03-26 07:06:14",
         HSD: "2021-03-26 07:06:14",
         MaSinhVien: 'HE141464',
         createdAt: "2021-03-26 07:06:14",
         updatedAt: "2021-03-26 07:06:14",
       },
       {
        NgayCap: "2021-03-26 07:06:14",
        HSD: "2021-03-26 07:06:14",
        MaSinhVien: 'HE141463',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      },
      {
        NgayCap: "2021-03-26 07:06:14",
        HSD: "2021-03-26 07:06:14",
        MaSinhVien: 'HE141462',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14",
      }
      ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbthethuviens', null, {});
  }
};
