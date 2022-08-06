'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbSaches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Ten: {
        type: Sequelize.STRING
      },
      MaTacGia:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbtacgia',
          key: 'id'
        }
      },
      MaTheLoai:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbtheloais',
          key: 'id'
        }
      },
      MaNXB:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbnhaxuatbans',
          key: 'id'
        }
      },

      MaKeSach:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbkesaches',
          key: 'id'
        }
      },
      AnhSach: {
        type: Sequelize.STRING
      },
      NamXB: {
        type: Sequelize.STRING
      },
      Gia: {
        type: Sequelize.FLOAT
      },
      SoLgDauSach: {
        type: Sequelize.INTEGER
      },
      SoLgHienTai: {
        type: Sequelize.INTEGER
      },
      NoiDung: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tbSaches');
  }
};