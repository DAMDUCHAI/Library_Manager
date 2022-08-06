'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbTacGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbSach}) {
      // define association here
      this.hasMany(tbSach,{foreignKey:'MaTacGia'}) //1 

    }
  }
  tbTacGia.init({
    Ten: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    DiaChi: DataTypes.STRING,
    TieuSu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbTacGia',
  });
  return tbTacGia;
};