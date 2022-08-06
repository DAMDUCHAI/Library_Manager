const {sequelize} =require('../models')

  const getListPhone = async (req, res) => {

    try {
 
        const [results] = await sequelize.query(
          `select Phone from tbthongtinchungs;`
        )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getListEmail = async (req, res) => {

    try {
      
        const [results] = await sequelize.query(
          ` select Email from tbacounts `
        )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getLisCCCD = async (req, res) => {

    try {
      
        const [results] = await sequelize.query(
          `select CCCD from tbthongtinchungs`
        )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getListMaSinhVien = async (req, res) => {

    try {
      
        const [results] = await sequelize.query(
          `select MaSinhVien from tbthethuviens`
        )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
module.exports = {
 
    getListMaSinhVien,
    getListPhone,
    getLisCCCD,
    getListEmail
  };