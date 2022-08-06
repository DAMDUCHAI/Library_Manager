'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbTinhTrang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbFieuSachChiTiet}) {
      // define association here
      this.hasMany(tbFieuSachChiTiet,{foreignKey:'MaTinhTrang'}) 


    }
  }
  tbTinhTrang.init({
    TinhTrang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbTinhTrang',
  });
  return tbTinhTrang;
};