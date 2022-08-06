const {tbTheThuVien,sequelize} =require('../models')
const createLibraryCard = async (req, res) => {
  const {NgayCap,HSD,MaSinhVien}  = req.body; 
 try {
      const newLibraryCard = await tbTheThuVien.create({NgayCap,HSD,MaSinhVien} );
      res.status(201).send(newLibraryCard);
    } catch (error) {
      res.status(500).send(error);
    }

  };
  const getListLibraryCard = async (req, res) => {

    try {

        const [results] = await sequelize.query(
          ` select*from tbthethuviens`
        )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };

const getLibraryCard= async (req, res) => {
  const { id } = req.params;
  try {
    const libraryCard =await tbTheThuVien.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(libraryCard);
  } catch (error) {
    res.status(500).send(error)

  }
}

const updateLibraryCard = async (req, res) => {
  const { id } = req.params;
  const {NgayCap,HSD,MaSinhVien} = req.body;
  try {
    
      const [results] = await sequelize.query(
        `UPDATE tbthethuviens SET MaSinhVien = "${MaSinhVien}", NgayCap ="${NgayCap}",HSD = "${HSD}" WHERE id= ${id};`
      )
      res.status(200).send(results);
    
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteLibraryCard = async (req, res) => {
  const { id } = req.params;
  try {
    await tbTheThuVien.destroy({
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
 
    createLibraryCard,
    getListLibraryCard,
    getLibraryCard,
    updateLibraryCard,
    deleteLibraryCard
 
  };