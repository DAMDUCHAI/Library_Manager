const { tbAcount, sequelize } = require('../models')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //token 
const createAcount = async (req, res) => {
  const { Email } = req.body;
  const {role}=req.params;

  try {
    const PassWord = '123a123@';
    // tạo ra một chuỗi ngẫu nhiên
    var salt = bcrypt.genSaltSync(10);
    // mã hóa salt + password
    const hashPassword = bcrypt.hashSync(PassWord, salt);
   
    if(role==='user'){
      const Role ='USER';
      const newAcount = await tbAcount.create({ Email, PassWord: hashPassword, Role });
      res.status(201).send(newAcount);
    }
    else{
      const Role ='ADMIN';
      const newAcount = await tbAcount.create({ Email, PassWord: hashPassword, Role });
      res.status(201).send(newAcount);
    }
   
  
  } catch (error) {
    res.status(500).send(error);
  }

};
const getListAcount = async (req, res) => {

  try {

    const acountList = await tbAcount.findAll();
    res.status(200).send(acountList);

  } catch (error) {
    res.status(500).send(error);
  }
};
const getAcount = async (req, res) => {
  const { id } = req.params;
  try {
    const acount = await tbAcount.findOne({
      where: {
        id,
      }
    })
    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error)

  }
}
const updateAcount = async (req, res) => {
  const { id } = req.params;
  const { Email, PassWord, Role } = req.body;
  try {
    const acount = await tbAcount.findOne({
      where: {
        id,
      },
    });
    acount.Email = Email;
    acount.PassWord = PassWord;
    acount.Role = Role;
    await acount.save();

    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAcount = async (req, res) => {
  const { id } = req.params;
  try {
    await tbAcount.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { Email, PassWord } = req.body;
  const acount = await tbAcount.findOne({
    where: {
      Email,
      isStatus:null
    },
  });
  if (acount) {
    const isAuth = bcrypt.compareSync(PassWord, acount.PassWord);
    console.log(isAuth);
    if (isAuth) {
      const token = jwt.sign(
        { Email: acount.Email, Role: acount.Role },
        "team3_swp391",
        { expiresIn: "10h" }
      );
      res.status(200).send({ message: "Đăng Nhập Thành Công ! ", token, Role: acount.Role, id: acount.id });
    } else {
      res.status(500).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } else {


      res.status(500).send({ message: "Không tìm thấy email phù hợp." });
      return;
    
  }
};

const changePass = async (req, res) => {
  try {
    const { id } = req.params;
    const { PassWord, NewPass, ConfirmPass } = req.body;
    const [results] = await sequelize.query(
      `select PassWord from tbacounts where id=${id}`
    )

    const isAuth = bcrypt.compareSync(PassWord, results[0].PassWord);

    if (isAuth) {
      if (NewPass != ConfirmPass) {
        res.status(500).send('Not Match');
        return;
      }
      else {

        // tạo ra một chuỗi ngẫu nhiên
        var salt = bcrypt.genSaltSync(10);
        // mã hóa salt + password
        const hashPassword = bcrypt.hashSync(NewPass, salt);
        console.log('hashPassword,', hashPassword);
        const acount = await tbAcount.findOne({
          where: {
            id,
          },
        });
        acount.PassWord = hashPassword;

        await acount.save();

        res.status(200).send('Update success');
      }
    }

    else {
      res.status(500).send('Not Change PassWord');
      return
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getNameUser = async (req, res) => {
  const { id,role } = req.params;

  try {
    if(role==='user'){
      const [results] = await sequelize.query(`select tbthongtinchungs.Ten from tbacounts left join 
      tbdocgia on tbdocgia.MaAcount=tbacounts.id inner join tbthongtinchungs
       on tbthongtinchungs.id=tbdocgia.MaThongTinChung where tbacounts.id=${id};
       
      `)
      res.status(200).send(results);
    }
    else{
      const [results] = await sequelize.query(`select tbthongtinchungs.Ten from tbacounts left join 
      tbnhanviens on tbnhanviens.MaAcount=tbacounts.id inner join tbthongtinchungs
       on tbthongtinchungs.id=tbnhanviens.MaThongTinChung where tbacounts.id=${id};
       
      `)
      res.status(200).send(results);
    }
  
 
  } catch (error) {
    res.status(500).send(error);
  }
};


const banAcount = async (req, res) => {
  const { id } = req.params;
  try {
    const acount = await tbAcount.findOne({
      where: {
        id,
      },
    });
  if(acount.isStatus==='BAN'){
    acount.isStatus=null;
    await acount.save();
  }else{
    acount.isStatus='BAN';
    await acount.save();
  }
 

    res.status(200).send(acount);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {

  createAcount,
  getListAcount,
  getAcount,
  updateAcount,
  deleteAcount,
  login,
  changePass,
  getNameUser,
  banAcount

};