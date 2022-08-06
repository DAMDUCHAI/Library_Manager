'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbFieuSach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbFieuSachChiTiet,tbTheThuVien,tbNhanVien}) {
      // define association here
      this.hasMany(tbFieuSachChiTiet,{foreignKey:'MaFieuSach'}) //1 
      this.hasMany(tbTheThuVien,{foreignKey:'MaThe'}) //1 
      this.belongsTo(tbNhanVien,{foreignKey:'MaNV'}) //1 
    }
  }
  tbFieuSach.init({
    NgayMuon: DataTypes.DATE,
    HenTra: DataTypes.DATE,
    SoLgMuonMax: DataTypes.INTEGER,
    MaThe: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tbFieuSach',
  });
  return tbFieuSach;
};