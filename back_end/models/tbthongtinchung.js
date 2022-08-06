'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbThongTinChung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbThongTinChung.init({
    Ten: DataTypes.STRING,
    NgaySinh: DataTypes.DATE,
    MaGioiTinh: DataTypes.INTEGER,
    CCCD: DataTypes.STRING,
    Phone: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tbThongTinChung',
  });
  return tbThongTinChung;
};