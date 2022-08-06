'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('tbkesaches', [
        {
        Ten: 'A1',
        createdAt: "2021-03-26 07:06:14",
        updatedAt: "2021-03-26 07:06:14"
     },
     {
      Ten: 'A2',
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14"
   },
   {
    Ten: 'A3',
    createdAt: "2021-03-26 07:06:14",
    updatedAt: "2021-03-26 07:06:14"
 }
    ]);
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tbkesaches', null, {});
    
  }
};
