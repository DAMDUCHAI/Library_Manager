const {tbFeedBack,sequelize} =require('../models')

const createFeedBack = async (req, res) => {
  const {TieuDe,NoiDung,MaAcount} = req.body;   // lay data tu nguoi dung
  const TrangThai=0; // chua xem
  
  const [results] = await sequelize.query(`select tbdocgia.id from tbacounts left join tbdocgia on tbdocgia.MaAcount=tbacounts.id where tbacounts.id= ${MaAcount} `)
const MaDocGia =results[0].id //lấy giá trị id ở phần tử thứ nhất
 try {
      const newFeedBack = await tbFeedBack.create({TieuDe,NoiDung,MaDocGia,TrangThai});
      res.status(201).send(newFeedBack);
    } catch (error) {
      res.status(500).send(error);
    }

  };
 
//id =0 chưa xem, id =1 đã xem , id =2 xem tất cả

  const getAllFeedback =async (req,res,)=>{
const {id}=req.params;
try {
if(id!=2){
  let [results] = await sequelize.query(`select tbfeedbacks.id,tbfeedbacks.TrangThai,tbthongtinchungs.Ten,tbthethuviens.MaSinhVien,tbacounts.Email,tbfeedbacks.TieuDe,tbfeedbacks.NoiDung from tbdocgia right join tbfeedbacks on tbdocgia.id =tbfeedbacks.MaDocGia inner join tbthongtinchungs
  on tbthongtinchungs.id=tbdocgia.MaThongTinChung inner join tbthethuviens on tbthethuviens.id=tbdocgia.MaThe inner join tbacounts
  on tbacounts.id =tbdocgia.MaAcount where tbfeedbacks.TrangThai=${id}`)
  res.status(200).send(results);
}

else{
  let [results] = await sequelize.query(` select tbfeedbacks.id,tbfeedbacks.TrangThai,tbthongtinchungs.Ten,tbthethuviens.MaSinhVien,tbacounts.Email,tbfeedbacks.TieuDe,tbfeedbacks.NoiDung from tbdocgia right join tbfeedbacks on tbdocgia.id =tbfeedbacks.MaDocGia inner join tbthongtinchungs
  on tbthongtinchungs.id=tbdocgia.MaThongTinChung inner join tbthethuviens on tbthethuviens.id=tbdocgia.MaThe inner join tbacounts
  on tbacounts.id =tbdocgia.MaAcount`)
  res.status(200).send(results);
}
    } catch (error) {
      res.status(500).send(error);
    }
    
    }


    const updateTrangThaiFeedBack = async (req, res) => {
      const { id } = req.params;
 
      try {
        const feedback = await tbFeedBack.findOne({
          where: {
            id,
          },
        });
        feedback.TrangThai = 1;
        await feedback.save(); //lưu vào database
    
        res.status(200).send(feedback);
      } catch (error) {
        res.status(500).send(error);
      }
    };



module.exports = {
 
    createFeedBack,
getAllFeedback,
 updateTrangThaiFeedBack 



 
  };