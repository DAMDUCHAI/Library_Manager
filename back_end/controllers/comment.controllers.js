const {tbComment,sequelize} =require('../models')
const createComment = async (req, res) => {
  const {NoiDung,MaSach,MaAcount} = req.body; 
const   [results] = await sequelize.query(
  ` select tbdocgia.id from tbacounts left join tbdocgia on tbdocgia.MaAcount=tbacounts.id where tbacounts.id=${MaAcount}`
)

 try {
      const newComment = await tbComment.create({NoiDung,MaSach,MaDocGia:results[0].id});
      res.status(201).send(newComment);
    } catch (error) {
      res.status(500).send(error);
    }

  };
const getListCommentByBook = async (req, res) => {
  const {id}=req.params  

    try {

      const   [results] = await sequelize.query(
        `select tbacounts.id,tbcomments.id as idComment,tbthongtinchungs.Ten,tbcomments.NoiDung,tbcomments.createdAt,tbcomments.updatedAt from tbcomments inner join tbdocgia 
        on tbdocgia.id=tbcomments.MaDocGia inner join tbsaches on tbsaches.id=tbcomments.MaSach 
        inner join tbthongtinchungs on tbthongtinchungs.id =tbdocgia.MaThongTinChung inner join tbacounts on tbacounts.id=tbdocgia.MaAcount where tbsaches.id=${id} ORDER BY tbcomments.updatedAt desc`
      )
        res.status(200).send(results);
      
    } catch (error) {
      res.status(500).send(error);
    }
  };
const getComment= async (req, res) => {
  const { id } = req.params;
  try {
    const comment =await tbComment.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateComment = async (req, res) => {
  const {NoiDung} = req.body; 
  const { id } = req.params;
  try {
    const comment = await tbComment.findOne({
      where: {
        id,
      },
    });
    comment.NoiDung = NoiDung;
 
    await comment.save();

    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await tbComment.destroy({
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
 
    createComment,
    getListCommentByBook,
    getComment,
    updateComment,
    deleteComment
 
  };