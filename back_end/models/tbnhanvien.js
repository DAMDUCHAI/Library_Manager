'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbNhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbFieuSach,tbAcount}) {
      // define association here
      this.hasOne(tbFieuSach,{foreignKey:'MaNV'}) //1 ,
      this.belongsTo(tbAcount,{foreignKey:'MaAcount'}) ;

    }
  }
  tbNhanVien.init({
    MaThongTinChung: DataTypes.INTEGER,
    NgayHD: DataTypes.DATE,
    MaAcount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tbNhanVien',
  });
  return tbNhanVien;
};