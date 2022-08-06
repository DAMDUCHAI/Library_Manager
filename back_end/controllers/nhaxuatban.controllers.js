const { tbNhaXuatBan, sequelize } = require('../models')
const { Op } = require("sequelize");

const createPublisher = async (req, res) => {
  const { Ten, Phone, Email, DiaChi, NguoiDaiDien } = req.body;
  try {
    const newPublisher = await tbNhaXuatBan.create({ Ten, Phone, Email, DiaChi, NguoiDaiDien });
    res.status(201).send(newPublisher);
  } catch (error) {
    res.status(500).send(error);
  }

};
const getListPublisher = async (req, res) => {

  try {
    const { name } = req.query; // ô input nhap
    if (name) {
      const publisherList = await tbNhaXuatBan.findAll({
        where: {
          Ten: {
            [Op.substring]: name // like %name%
          }
        }
      });
      res.status(200).send(publisherList);
    } else {
      const publisherList = await tbNhaXuatBan.findAll();
      res.status(200).send(publisherList);
    }

  } catch (error) {
    res.status(500).send(error);
  }
};
const getPublisher = async (req, res) => {
  const { id } = req.params;
  try {
    const publisher = await tbNhaXuatBan.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(publisher);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updatePublisher = async (req, res) => {
  const { id } = req.params;
  const { Ten, Phone, Email, DiaChi, NguoiDaiDien } = req.body; //da ta nguoi dung nhap
  try {
    const publisher = await tbNhaXuatBan.findOne({
      where: {
        id,
      },
    });
    publisher.Ten = Ten;
    publisher.Phone = Phone;
    publisher.Email = Email;
    publisher.DiaChi = DiaChi;
    publisher.NguoiDaiDien = NguoiDaiDien;
    await publisher.save();

    res.status(200).send(publisher);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePublisher = async (req, res) => {
  const { id } = req.params;   //lấy id của người dùng trên thanh url (ở phần router)
  try {
    await tbNhaXuatBan.destroy({
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

  createPublisher,
  getListPublisher,
  getPublisher,
  updatePublisher,
  deletePublisher

};