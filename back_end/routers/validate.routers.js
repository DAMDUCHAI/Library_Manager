const express = require("express");
const {      getListMaSinhVien,
    getListPhone,
    getLisCCCD,
    getListEmail} =require("../controllers/validateController");

const validateRouter = express.Router();
validateRouter.get("/get-list-masinhvien",getListMaSinhVien);
validateRouter.get("/get-list-phone" ,getListPhone);
validateRouter.get("/get-list-cccd" ,getLisCCCD);
validateRouter.get("/get-list-email" ,getListEmail);


module.exports = {
    validateRouter,
    
  };