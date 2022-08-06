const {tbTacGia,sequelize} =require('../models')
const { Op } = require("sequelize");

const createAuthor = async (req, res) => {
    const {Ten,Phone,Email,DiaChi,TieuSu} = req.body;
 try {
      const newAuthor = await tbTacGia.create({Ten,Phone,Email,DiaChi,TieuSu});
      res.status(201).send(newAuthor);
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListAuthor = async (req, res) => {
    
    try {
      const { name } = req.query;
      if(name){
        const authorList = await tbTacGia.findAll({
          where: {
            Ten: {
              [Op.substring]: name
            }
          }
        });
        res.status(200).send(authorList);
      }else{
        const authorList = await tbTacGia.findAll();
        res.status(200).send(authorList);
      }
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getAuthor= async (req, res) => {
  const { id } = req.params;
  try {
    const author =await tbTacGia.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error)

  }
}


const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const {Ten,Phone,Email,DiaChi,TieuSu} = req.body;
  try {
    const author = await tbTacGia.findOne({
      where: {
        id,
      },
    });
    author.Ten = Ten;
    author.Phone = Phone;
    author.Email = Email;
    author.DiaChi = DiaChi;
    author.TieuSu = TieuSu;
    await author.save();

    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    await tbTacGia.destroy({
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
 
    createAuthor,
    getListAuthor,
    getAuthor,
    updateAuthor,
    deleteAuthor
 
  };