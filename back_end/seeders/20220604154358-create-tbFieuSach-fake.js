'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tbfieusaches', [
       {
       NgayMuon: "2021-03-26 07:06:14",
       MaThe: 1,
       MaFieuSach: 1,
       HenTra: "2021-03-26 07:06:14",
       SoLgMuonMax: 3,
       createdAt: "2021-03-26 07:06:14",
       updatedAt: "2021-03-26 07:06:14",
     },
     {
      NgayMuon: "2021-03-26 07:06:14",
      MaThe: 1,
      MaFieuSach: 2,
      HenTra: "2021-03-26 07:06:14",
      SoLgMuonMax: 2,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    },
    {
      NgayMuon: "2021-03-26 07:06:14",
      MaThe: 1,
      MaFieuSach: 1,
      HenTra: "2021-03-26 07:06:14",
      SoLgMuonMax: 3,
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14",
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
