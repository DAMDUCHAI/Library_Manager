'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbPhat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbFieuSachChiTiet}) {
      // define association here
      this.hasOne(tbFieuSachChiTiet,{foreignKey:'MaPhat'}) //1 

    }
  }
  tbPhat.init({
    TienFat: DataTypes.FLOAT,
    LyDo: DataTypes.STRING,
    TinhTrang:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'tbPhat',
  });
  return tbPhat;
};