

const sendMail = require('../util/sendMail/sendMail');

const sendMailToUser = async function (req, res) {
    // const email = req.query.email;
    // let code = Math.floor(1000 + Math.random() * 9000);
  
    sendMail.sendMailVerify('haiddhe141462@fpt.edu.vn', '1 ngày mới tốt lành');
    
    
};



module.exports = {
 sendMailToUser 


 
  };