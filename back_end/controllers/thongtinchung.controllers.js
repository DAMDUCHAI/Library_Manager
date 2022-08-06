const {tbThongTinChung,sequelize} =require('../models')
const createCommonInformation = async (req, res) => {
  const {Ten,NgaySinh,MaGioiTinh,CCCD,Phone,DiaChi} = req.body; 

const img =`http://localhost:4500/${req.file.path}`
 try {
      const newCommonInformation = await tbThongTinChung.create({Ten,NgaySinh,MaGioiTinh,CCCD,Phone,DiaChi,img});
      res.status(201).send(newCommonInformation);
      
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListCommonInformation = async (req, res) => {
    
    try {

        const commonInformationList = await tbThongTinChung.findAll();
        res.status(200).send(commonInformationList);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getCommonInformation= async (req, res) => {
  const { id } = req.params;
  try {
    const commonInformation =await tbThongTinChung.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(commonInformation);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateCommonInformation = async (req, res) => {
  const { id } = req.params;
  const {Ten,NgaySinh,MaGioiTinh,CCCD,Phone,DiaChi} = req.body; 

const img =`http://localhost:4500/${req.file.path}`
 
  try {
    const commonInformation = await tbThongTinChung.findOne({
      where: {
        id,
      },
    });
    commonInformation.Ten = Ten;
    commonInformation.NgaySinh = NgaySinh;
    commonInformation.MaGioiTinh = MaGioiTinh;
    commonInformation.CCCD = CCCD;
    commonInformation.Phone = Phone;
    commonInformation.DiaChi = DiaChi;
    commonInformation.img = img;
    await commonInformation.save();

    res.status(200).send(commonInformation);
  } catch (error) {
    res.status(500).send(error);
  }

};

const deleteCommonInformation = async (req, res) => {
  const { id } = req.params;
  try {
    await tbThongTinChung.destroy({
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
 
    createCommonInformation,
    getListCommonInformation,
    getCommonInformation,
    updateCommonInformation,
    deleteCommonInformation
 
  };