'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbTacGia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Ten: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      DiaChi: {
        type: Sequelize.STRING
      },
      TieuSu: {
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
    await queryInterface.dropTable('tbTacGia');
  }
};