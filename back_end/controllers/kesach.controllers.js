const {tbKeSach,sequelize} =require('../models')
const { Op } = require("sequelize");

const createBookshelf = async (req, res) => {
  const {Ten} = req.body; 
 try {
      const newBookshelf = await tbKeSach.create({Ten});
      res.status(201).send(newBookshelf);
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListBookshelf = async (req, res) => {

    try {
      const { name } = req.query;
      if(name){
        const bookshelfList = await tbKeSach.findAll({
          where: {
            Ten: {
              [Op.substring]: name
            }
          }
        });
        res.status(200).send(bookshelfList);
      }else{
        const bookshelfList = await tbKeSach.findAll();
        res.status(200).send(bookshelfList);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getBookshelf= async (req, res) => {
  const { id } = req.params;
  try {
    const bookshelf =await tbKeSach.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(bookshelf);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateBookshelf = async (req, res) => {
  const { id } = req.params;
  const {Ten} = req.body;
  try {
    const bookshelf = await tbKeSach.findOne({
      where: {
        id,
      },
    });
    bookshelf.Ten = Ten;
    await bookshelf.save();

    res.status(200).send(bookshelf);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBookshelf = async (req, res) => {
  const { id } = req.params;
  try {
    await tbKeSach.destroy({
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
 
    createBookshelf,
    getListBookshelf,
    getBookshelf,
    updateBookshelf,
    deleteBookshelf
 
  };