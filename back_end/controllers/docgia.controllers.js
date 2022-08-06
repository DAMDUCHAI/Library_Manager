const {tbDocGia,sequelize} =require('../models')
const createReader = async (req, res) => {
  const {MaThongTinChung,MaThe,MaAcount} = req.body; //thong tinn ma nguoi dung nhap trong form input
 try {
      const newReader = await tbDocGia.create({MaThongTinChung,MaThe,MaAcount});
      res.status(201).send(newReader);
    } catch (error) {
      res.status(500).send(error);
    }

  };
  const getListReader = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const [results] = await sequelize.query(
          ` select tbdocgia.*, tbthongtinchungs.Ten,tbthongtinchungs.NgaySinh,tbthongtinchungs.MaGioiTinh,tbthongtinchungs.CCCD,tbthongtinchungs.Phone,tbthongtinchungs.DiaChi,tbgioitinhs.NoiDung as GioiTinh,tbthongtinchungs.img,tbacounts.Email,tbacounts.PassWord,tbacounts.Role,tbacounts.isStatus,tbthethuviens.MaSinhVien,tbthethuviens.NgayCap,tbthethuviens.HSD  from tbdocgia left join tbthongtinchungs on tbdocgia.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
          on tbdocgia.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id inner join tbthethuviens on tbdocgia.MaThe=tbthethuviens.id
           where tbthongtinchungs.Ten LIKE "%${name}%"`
        )
        res.status(200).send(results);
      } else {
        const [results] = await sequelize.query(
          `select tbdocgia.*, tbthongtinchungs.Ten,tbthongtinchungs.NgaySinh,tbthongtinchungs.MaGioiTinh,tbthongtinchungs.CCCD,tbthongtinchungs.Phone,tbthongtinchungs.DiaChi,tbgioitinhs.NoiDung as GioiTinh,tbthongtinchungs.img,tbacounts.Email,tbacounts.PassWord,tbacounts.Role,tbacounts.isStatus,tbthethuviens.MaSinhVien,tbthethuviens.NgayCap,tbthethuviens.HSD  from tbdocgia left join tbthongtinchungs on tbdocgia.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
          on tbdocgia.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id inner join tbthethuviens on tbdocgia.MaThe=tbthethuviens.id `
        )
        res.status(200).send(results);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getReader= async (req, res) => {
    const { id } = req.params;
    try {
      const [results] = await sequelize.query(`select tbthongtinchungs.* from tbacounts left join tbdocgia on 
      tbdocgia.MaAcount=tbacounts.id inner join tbthongtinchungs on
      tbdocgia.MaThongTinChung=tbthongtinchungs.id
       where tbacounts.id=${id} `)
       console.log(results);
      res.status(200).send(results[0]);
      }

 catch (error) {
      res.status(500).send(error)
  
    }
  }
const updateReader = async (req, res) => {
  const { id } = req.params;
  const {MaThongTinChung,MaThe,MaAcount} = req.body; 
  try {
    const reader = await tbDocGia.findOne({
      where: {
        id,
      },
    });
    reader.MaThongTinChung = MaThongTinChung;
    reader.MaThe = MaThe;
    reader.MaAcount = MaAcount;
    await reader.save();

    res.status(200).send(reader);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteReader = async (req, res) => {
  const { id } = req.params;
  try {
    await tbDocGia.destroy({
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
 
    createReader,
    getListReader,
    getReader,
    updateReader,
    deleteReader
 
  };