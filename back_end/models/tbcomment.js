'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbDocGia,tbSach}) {
      this.belongsTo(tbDocGia,{foreignKey:'MaDocGia'}) ,
      this.belongsTo(tbSach,{foreignKey:'MaSach'}) 
    }
  }
  tbComment.init({
    MaDocGia: DataTypes.INTEGER,
    MaSach: DataTypes.INTEGER,
    NoiDung: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbComment',
  });
  return tbComment;
};