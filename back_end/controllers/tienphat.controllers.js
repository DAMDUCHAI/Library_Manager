const {tbPhat,sequelize} =require('../models')

const getListMoney = async (req, res) => {
  const { name } = req.query;
    try {
      if (name) {
        const   [results] = await sequelize.query(
            `select tbdocgia.id,tbthongtinchungs.Ten,tbthethuviens.MaSinhVien,tbthongtinchungs.img,tbthongtinchungs.Phone ,sum(TienFat) as TongTien from tbphats inner join tbfieusachchitiets on tbfieusachchitiets.MaPhat=tbphats.id inner
            join tbfieusaches on tbfieusaches.id=tbfieusachchitiets.MaFieuSach inner join tbthethuviens on
             tbthethuviens.id=tbfieusaches.MaThe inner join tbdocgia on tbdocgia.MaThe=tbthethuviens.id 
             inner join tbthongtinchungs on tbthongtinchungs.id=tbdocgia.MaThongTinChung 
             group by tbdocgia.id having tbthongtinchungs.Ten like "%${name}%"`
          )
            res.status(200).send(results);}
            else{
              const   [results] = await sequelize.query(
                `select tbdocgia.id,tbthongtinchungs.Ten,tbthethuviens.MaSinhVien,tbthongtinchungs.img,tbthongtinchungs.Phone ,sum(TienFat) as TongTien from tbphats inner join tbfieusachchitiets on tbfieusachchitiets.MaPhat=tbphats.id inner
                join tbfieusaches on tbfieusaches.id=tbfieusachchitiets.MaFieuSach inner join tbthethuviens on
                 tbthethuviens.id=tbfieusaches.MaThe inner join tbdocgia on tbdocgia.MaThe=tbthethuviens.id 
                 inner join tbthongtinchungs on tbthongtinchungs.id=tbdocgia.MaThongTinChung 
                 group by tbdocgia.id;`
              )
                res.status(200).send(results);
            }
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getListMoneyDetaildByReader = async (req, res) => {
       const {id}= req.params
    try {

        const   [results] = await sequelize.query(
            `select tbdocgia.id as idDocGia,tbthongtinchungs.Ten,tbthethuviens.MaSinhVien, tbphats.*from tbphats inner join tbfieusachchitiets on tbfieusachchitiets.MaPhat=tbphats.id inner
            join tbfieusaches on tbfieusaches.id=tbfieusachchitiets.MaFieuSach inner join tbthethuviens on
             tbthethuviens.id=tbfieusaches.MaThe inner join tbdocgia on tbdocgia.MaThe=tbthethuviens.id 
             inner join tbthongtinchungs on tbthongtinchungs.id=tbdocgia.MaThongTinChung where tbdocgia.id=${id}`
          )
            res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
  const payment = async (req, res) => {
    const { id } = req.params;
    const TinhTrang='Đã Nộp'
    
    try {
        
      const phat = await tbPhat.findOne({
        where: {
          id,
        },
      });
  
      phat.TinhTrang = TinhTrang;
      await phat.save();

      res.status(200).send(phat);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };




module.exports = {
 
    
    getListMoney,
    payment,
    getListMoneyDetaildByReader

 
  };