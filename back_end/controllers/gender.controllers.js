const {tbGioiTinh} =require('../models')

const getListGender = async (req, res) => {
    
    try {

        const genderList = await tbGioiTinh.findAll();
        res.status(200).send(genderList);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports = {
 
   
    getListGender,

 
  };