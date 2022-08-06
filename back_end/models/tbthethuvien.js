'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbTheThuVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbDocGia}) {
      // define association here
      this.hasOne(tbDocGia,{foreignKey:'MaThe'}) ;
      
    }
  }
  tbTheThuVien.init({
    NgayCap: DataTypes.DATE,
    HSD: DataTypes.DATE,
    MaSinhVien:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbTheThuVien',
  });
  return tbTheThuVien;
};