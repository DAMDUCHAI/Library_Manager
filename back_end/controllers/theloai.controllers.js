const {tbTheLoai,sequelize} =require('../models')
const { Op } = require("sequelize");

const createCategoryBook = async (req, res) => {
  const {Ten} = req.body; //người dùng nhập data vào ô input
 try {


      const newCategoryBook = await tbTheLoai.create({Ten});
      res.status(201).send(newCategoryBook);
    } catch (error) {
      res.status(500).send(error);
    }

  };


const getListCategoryBook = async (req, res) => { 
    try {
      const { name } = req.query; // lấy giá trị của thanh search
      if(name){
        const categoryBookList = await tbTheLoai.findAll({
          where: {
            Ten: {
              [Op.substring]: name   // Like %name%
            }
          }
        });
        res.status(200).send(categoryBookList);
      }else{
        const categoryBookList = await tbTheLoai.findAll();
        res.status(200).send(categoryBookList);
      }

      
    } catch (error) {
      res.status(500).send(error);
    }
  };


const getCategoryBook= async (req, res) => {
  const { id } = req.params;
  try {
    const categoryBook =await tbTheLoai.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(categoryBook);
  } catch (error) {
    res.status(500).send(error)

  }
}


const updateCategoryBook = async (req, res) => {
  const { id } = req.params;   
  const {Ten} = req.body;   //dữ liệu người dùng nhập vào
  try {
    const categoryBook = await tbTheLoai.findOne({
      where: {
        id,
      },
    });

    categoryBook.Ten = Ten;
    await categoryBook.save();

    res.status(200).send(categoryBook);
  } catch (error) {
    res.status(500).send(error);
  }

};



const deleteCategoryBook = async (req, res) => {
  const { id } = req.params;
  try {
    await tbTheLoai.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
 
  createCategoryBook,
  getListCategoryBook,
  getCategoryBook,
  updateCategoryBook,
  deleteCategoryBook
 
  };