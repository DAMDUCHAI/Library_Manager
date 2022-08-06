const {tbNhanVien,sequelize} =require('../models')
const createStaff = async (req, res) => {
  const {MaThongTinChung,MaAcount,NgayHD} = req.body; 
 try {
      const newStaff = await tbNhanVien.create({MaThongTinChung,MaAcount,NgayHD});
      res.status(200).send(newStaff);
    } catch (error) {
      res.status(500).send(error);
    }

  };
  const getListStaff = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const [results] = await sequelize.query(
          ` select tbnhanviens.*, tbthongtinchungs.Ten,tbthongtinchungs.NgaySinh,tbthongtinchungs.MaGioiTinh,tbthongtinchungs.CCCD,tbthongtinchungs.Phone,tbthongtinchungs.DiaChi,tbgioitinhs.NoiDung as GioiTinh,tbthongtinchungs.img,tbacounts.Email,tbacounts.PassWord,tbacounts.Role,tbacounts.isStatus  from tbnhanviens left join tbthongtinchungs on tbnhanviens.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
          on tbnhanviens.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id 
           where tbthongtinchungs.Ten LIKE "%${name}%"`
        )
        res.status(200).send(results);
      } else {
        const [results] = await sequelize.query(
          `select tbnhanviens.*, tbthongtinchungs.Ten,tbthongtinchungs.NgaySinh,tbthongtinchungs.MaGioiTinh,tbthongtinchungs.CCCD,
          tbthongtinchungs.Phone,tbthongtinchungs.DiaChi,tbgioitinhs.NoiDung as GioiTinh,
          tbthongtinchungs.img,tbacounts.Email,tbacounts.PassWord,tbacounts.Role ,tbacounts.isStatus from tbnhanviens left join tbthongtinchungs on tbnhanviens.MaThongTinChung=tbthongtinchungs.id inner join tbacounts 
                    on tbnhanviens.MaAcount=tbacounts.id inner join tbgioitinhs on tbthongtinchungs.MaGioiTinh=tbgioitinhs.id `
        )
        res.status(200).send(results);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getStaff= async (req, res) => {
    const { id } = req.params;
    try {
      const [results] = await sequelize.query(`select tbthongtinchungs.* from tbacounts left join tbnhanviens on 
      tbnhanviens.MaAcount=tbacounts.id inner join tbthongtinchungs on
      tbnhanviens.MaThongTinChung=tbthongtinchungs.id
       where tbacounts.id=${id} `)
       console.log(results);
      res.status(200).send(results[0]);
      }

 catch (error) {
      res.status(500).send(error)
  
    }
  }
const updateStaff = async (req, res) => {
  const { id } = req.params;
  const {MaThongTinChung,MaAcount} = req.body; 
  try {
    const staff = await tbNhanVien.findOne({
      where: {
        id,
      },
    });
    staff.MaThongTinChung = MaThongTinChung;
    
    staff.MaAcount = MaAcount;
    await staff.save();

    res.status(200).send(staff);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    await tbNhanVien.destroy({
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
 
    createStaff,
    getListStaff,
    getStaff,
    updateStaff,
    deleteStaff
 
  };