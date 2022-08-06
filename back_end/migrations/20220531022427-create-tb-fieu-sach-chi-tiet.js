'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbFieuSachChiTiets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MaSach: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbsaches',
          key: 'id'
        }
      },
      MaTinhTrang: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbtinhtrangs',
          key: 'id'
        }
      },
      NgayTra: {
        type: Sequelize.DATE,
        
      },
      MaPhat: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbphats',
          key: 'id'
        }
      },
      MaFieuSach: {
        type: Sequelize.INTEGER,
        references:{
          model: 'tbfieusaches',
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
    await queryInterface.dropTable('tbFieuSachChiTiets');
  }
};