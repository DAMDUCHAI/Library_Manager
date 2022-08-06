const express = require("express");
const {    sendMailToUser} =require("../controllers/mail.controller");

    const mailRouter = express.Router();
    mailRouter.get('/', sendMailToUser)
    
    
    
    module.exports = {
        mailRouter,
        
      };