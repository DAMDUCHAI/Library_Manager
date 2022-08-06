const {tbnoiquy,sequelize} =require('../models')
const createRulesBook = async (req, res) => {
  const {NoiDung} = req.body; 
 try {


      const newRulesBook = await tbnoiquy.create({NoiDung});
      res.status(201).send(newRulesBook);
    } catch (error) {
      res.status(500).send(error);
    }

  };


const getListRulesBook = async (req, res) => { 
    try {

        const rulesBookList = await tbnoiquy.findAll();
        res.status(200).send(rulesBookList);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };


const getRulesBook= async (req, res) => {
  const { id } = req.params;
  try {
    const rulesBook =await tbnoiquy.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(rulesBook);
  } catch (error) {
    res.status(500).send(error)

  }
}


const updateRulesBook = async (req, res) => {
  const { id } = req.params;
  const {NoiDung} = req.body;
  try {
    const rulesBook = await tbnoiquy.findOne({
      where: {
        id,
      },
    });

    rulesBook.NoiDung = NoiDung;
    await rulesBook.save();

    res.status(200).send(rulesBook);
  } catch (error) {
    res.status(500).send(error);
  }

};

const deleteRulesBook = async (req, res) => {
  const { id } = req.params;
  try {
    await tbnoiquy.destroy({
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
 
  createRulesBook,
  getListRulesBook,
  getRulesBook,
  updateRulesBook,
  deleteRulesBook
 
  };