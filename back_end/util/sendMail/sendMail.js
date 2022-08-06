var nodemailer = require('nodemailer');

exports.sendMailVerify = function (email, code) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        secure: false,
        port: 587,
        
        auth: {
            user: 'damduchai04052000@gmai.com', // generated ethereal user
            pass: '452000duchai',              // generated ethereal password
        },
   
    });

    var mailOptions = {
        from: 'damduchai04052000@gmai.com',
        to: email,
        subject: 'Library - Quên Mật Khẩu',
        text: code + ' là mật khẩu tạm thời của bạn.'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('iudaghod');
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}