'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbSach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbTheLoai,tbTacGia,tbNhaXuatBan,tbKeSach,tbFieuSachChiTiet,tbComment}) {
      // define association here
      this.belongsTo(tbTheLoai,{foreignKey:'MaTheLoai'}) ,
      this.belongsTo(tbTacGia,{foreignKey:'MaTacGia'}) ,
      this.belongsTo(tbNhaXuatBan,{foreignKey:'MaNXB'}) 
      this.belongsTo(tbKeSach,{foreignKey:'MaKeSach'}) 
      this.hasMany(tbFieuSachChiTiet,{foreignKey:'MaSach'})
      this.hasMany(tbComment,{foreignKey:'MaSach'})
    }
  }
  tbSach.init({
    Ten: DataTypes.STRING,
    AnhSach: DataTypes.STRING,
    NamXB: DataTypes.STRING,
    Gia: DataTypes.FLOAT,
    SoLgDauSach: DataTypes.INTEGER,
    SoLgHienTai: DataTypes.INTEGER,
    NoiDung: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbSach',
  });
  return tbSach;
};