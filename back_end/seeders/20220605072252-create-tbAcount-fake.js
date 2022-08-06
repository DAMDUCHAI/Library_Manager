'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbacounts', [{
       Email: 'dh@gmail.com',
       PassWord: '123456',
       Role: 0,
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },
     {
      Email: 'dt@gmail.com',
      PassWord: '123456',
      Role: 1,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },
    {
      Email: 'dq@gmail.com',
      PassWord: '654321',
      Role: 0,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tbacounts', null, {});
     
  }
};
