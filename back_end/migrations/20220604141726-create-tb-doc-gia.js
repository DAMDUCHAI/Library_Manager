'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbDocGia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaThongTinChung: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbthongtinchungs',
          key: 'id'
        }
      },
      MaThe: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbthethuviens',
          key: 'id'
        }
      },
      MaAcount: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbacounts',
          key: 'id'
        }
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
    await queryInterface.dropTable('tbDocGia');
  }
};