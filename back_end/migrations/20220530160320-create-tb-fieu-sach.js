'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbFieuSaches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NgayMuon: {
        type: Sequelize.DATE
      },
      MaThe:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbthethuviens',
          key: 'id'
        }
      },
      MaFieuSach:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbfieusaches',
          key: 'id'
        }
      },
      HenTra: {
        type: Sequelize.DATE
      },
      SoLgMuonMax: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbFieuSaches');
  }
};