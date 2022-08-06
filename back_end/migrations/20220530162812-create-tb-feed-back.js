'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbFeedBacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TieuDe: {
        type: Sequelize.STRING
      },
      NoiDung: {
        type: Sequelize.STRING
      },
      TrangThai: {
        type: Sequelize.BOOLEAN
      },
      MaDocGia:{
        type: Sequelize.INTEGER,
        references:{
          model: 'tbdocgia',
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
    await queryInterface.dropTable('tbFeedBacks');
  }
};