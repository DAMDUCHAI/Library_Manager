const {sequelize} =require('../models')

const numberOfUnpaidBooks = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select  count(*) as numberOfUnpaidBooks from   tbfieusachchitiets where NgayTra is null;`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
  const totalNumberOfBooks = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select  sum(SoLgHienTai) as totalNumberOfBooks from   tbsaches ;`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const countNumberOfLostBooks = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select count(*) as countNumberOfLostBooks from tbfieusachchitiets where MaTinhTrang=3`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const countNumberReader = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select count(*) as countNumberReader from tbdocgia `
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const countBookLate = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select count(*) as countBookLate from tbfieusachchitiets where MaTinhTrang=2`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const countBookEarly = async (req, res) => {

    try {

      const   [results] = await sequelize.query(
        `select count(*) as countBookEarly from tbfieusachchitiets where MaTinhTrang=1`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = {
 
    numberOfUnpaidBooks,   //số lườn quyển sách chưa được trả
    totalNumberOfBooks ,   //tổng số sách có trong thư viện
    countNumberOfLostBooks,  // số sách làm mất
    countNumberReader,        // số độc giả
    countBookLate     , // sô sách trả muộn
    countBookEarly // sô sách trả sớm
    
 
  };