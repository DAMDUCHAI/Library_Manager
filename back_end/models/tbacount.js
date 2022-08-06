'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbAcount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbDocGia,tbNhanVien}) {
      // define association here
      this.hasOne(tbDocGia,{foreignKey:'MaAcount'}) ;
      this.hasOne(tbNhanVien,{foreignKey:'MaAcount'}) ;
    }
  }
  tbAcount.init({
    Email: DataTypes.STRING,
    PassWord: DataTypes.STRING,
    Role: DataTypes.INTEGER, 
    isStatus: DataTypes.STRING,

    
  }, {  
    sequelize,
    modelName: 'tbAcount',
  });
  return tbAcount;
};