'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbThongTinChungs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Ten: {
        type: Sequelize.STRING
      },
      NgaySinh: {
        type: Sequelize.DATE
      },
      MaGioiTinh: {
        type: Sequelize.INTEGER,     
        references:{
          model: 'tbgioitinhs',
          key: 'id'
        }
      },
      CCCD: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },

      DiaChi: {
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
    await queryInterface.dropTable('tbThongTinChungs');
  }
};