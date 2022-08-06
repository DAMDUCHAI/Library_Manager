'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbFieuSachChiTiet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbTinhTrang,tbPhat,tbFieuSach,tbSach}) {
      // define association here
      this.belongsTo(tbFieuSach,{foreignKey:'MaFieuSach'}) //1 
      this.belongsTo(tbSach,{foreignKey:'MaSach'}) //1 
      this.belongsTo(tbTinhTrang,{foreignKey:'MaTinhTrang'}) //1 
      this.belongsTo(tbPhat,{foreignKey:'MaPhat'}) //1 

    }
  }
  tbFieuSachChiTiet.init({
    MaSach: DataTypes.INTEGER,
    MaTinhTrang: DataTypes.INTEGER,
    NgayTra: DataTypes.DATE,
    MaPhat: DataTypes.INTEGER,
    MaFieuSach: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbFieuSachChiTiet',
  });
  return tbFieuSachChiTiet;
};