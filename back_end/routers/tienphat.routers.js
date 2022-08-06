const express = require("express");
const { getListMoney,payment,getListMoneyDetaildByReader} =require("../controllers/tienphat.controllers");

const {authenticate
} =require("../middlewares/auth/authenticate");
const tienphatRouter = express.Router();

tienphatRouter.get("/get-list-money" ,getListMoney);
tienphatRouter.put("/payment/:id",authenticate ,payment);
tienphatRouter.get("/get-list-money-by-reader/:id",authenticate ,getListMoneyDetaildByReader);




module.exports = {
    tienphatRouter,
    
  };