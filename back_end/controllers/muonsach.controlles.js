const {tbSach,sequelize,} =require('../models')
const getListBorrowByReader = async (req, res) => {
    const {id} =req.params

    try {
        const [results] = await sequelize.query(`select tbthongtinchungs.Ten,tbfieusaches.NgayMuon,tbsaches.Ten as TenSach,tbtacgia.Ten as TacGia,tbfieusaches.HenTra ,tbtinhtrangs.TinhTrang from tbfieusaches right join tbfieusachchitiets
        on tbfieusaches.id=tbfieusachchitiets.MaFieuSach 
        inner join tbsaches on tbsaches.id=tbfieusachchitiets.MaSach inner join tbtinhtrangs on tbtinhtrangs.id = tbfieusachchitiets.MaTinhTrang
        left join tbphats on tbphats.id =tbfieusachchitiets.MaPhat inner join tbtacgia on tbtacgia.id=tbsaches.MaTacGia 
        inner join tbthethuviens on tbthethuviens.id= tbfieusaches.MaThe
        inner join tbdocgia on tbdocgia.MaThe =tbthethuviens.id
        inner join tbthongtinchungs on tbthongtinchungs.id=tbdocgia.MaThongTinChung
        where tbthethuviens.id=${id} and tbtinhtrangs.id=1` )
      res.status(201).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
    
  };



  const getListBorrowByEmail = async (req, res,email) => {
    const {id} =req.params
console.log('fdsagfsdagdsgsdfgfdg,',id);
    try {
        const [results] = await sequelize.query(`select tbthongtinchungs.Ten,tbfieusaches.NgayMuon,tbfieusaches.HenTra,tbsaches.Ten,tbsaches.AnhSach ,tbtacgia.Ten as TacGia,tbtheloais.Ten as TheLoai, tbtinhtrangs.TinhTrang from tbacounts  left join tbdocgia on tbacounts.id=tbdocgia.MaAcount inner join tbthethuviens on
        tbdocgia.MaThe=tbthethuviens.id inner join tbfieusaches on tbthethuviens.id=tbfieusaches.MaThe inner join tbfieusachchitiets
        on tbfieusachchitiets.MaFieuSach =tbfieusaches.id inner join tbtinhtrangs on tbfieusachchitiets.MaTinhTrang=tbtinhtrangs.id
        inner join tbthongtinchungs on tbthongtinchungs.id=tbdocgia.MaThongTinChung inner join tbsaches on tbsaches.id=tbfieusachchitiets.MaSach
        inner join tbtacgia on tbtacgia.id=tbsaches.MaTacGia inner join tbtheloais on tbtheloais.id=tbsaches.MaTheLoai
        where tbacounts.id=${id} ` )
      res.status(201).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
    
  };

  const countBorrowBookByMonth = async (req, res,email) => {

    try {
        const [results] = await sequelize.query(`SELECT MONTH(tbfieusaches.NgayMuon) as Thang,COUNT(tbfieusaches.id)  as SoLuongMuon
        FROM tbfieusaches  
        WHERE YEAR(tbfieusaches.NgayMuon) = 2022  
        GROUP BY MONTH(tbfieusaches.NgayMuon) order by MONTH(tbfieusaches.NgayMuon)` )
      res.status(201).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
    
  };

module.exports = {
 
    getListBorrowByReader,
    getListBorrowByEmail,
    countBorrowBookByMonth

 
  };