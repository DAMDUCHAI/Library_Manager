'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbKeSach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({tbSach}) {
      // define association here
      this.hasMany(tbSach,{foreignKey:'MaKeSach'}) //1 
    }
  }
  tbKeSach.init({
    Ten: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbKeSach',
  });
  return tbKeSach;
};