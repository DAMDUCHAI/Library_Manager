'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbDocGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbAcount,tbFeedBack,tbTheThuVien,tbComment}) {
      // define association here
      this.hasMany(tbFeedBack,{foreignKey:'MaDocGia'});
      this.belongsTo(tbTheThuVien,{foreignKey:'MaThe'}) ;
      this.belongsTo(tbAcount,{foreignKey:'MaAcount'}) ;
      this.hasMany(tbComment,{foreignKey:'MaDocGia'}) //1 

    }
  }
  tbDocGia.init({
   
    MaThongTinChung: DataTypes.INTEGER,
    MaThe: DataTypes.INTEGER,
    MaAcount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tbDocGia',
  });
  return tbDocGia;
};