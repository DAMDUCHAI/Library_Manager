'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('tbtacgia', [
        {
       Ten: 'Kim Lan',
        Phone: '0399617464',
        Email: 'kl@gmail.com',
        DiaChi: 'Bac Ninh',
        TieuSu:'La mot nha van thien tai',
        createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14"
     }
    ,
    {
      Ten: 'Ho Chi Minh',
       Phone: '0399618392',
       Email: 'hcm@gmail.com',
       DiaChi: 'Nghe An',
       TieuSu:'La mot lanh tu vi dai cua Virt Nam',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14"
    }
    ,
    {
      Ten: 'Nguyen Du',
       Phone: '0399537464',
       Email: 'nd@gmail.com',
       DiaChi: 'Ha Tinh',
       TieuSu:'Tac gia cua bo truyen noi tieng',
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14"
    }
    ]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbtacgia', null, {});
  }
};
