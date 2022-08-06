const express = require("express");
const {    
    getListGender,
   } =require("../controllers/gender.controllers");

const gioitinhRouter = express.Router();

gioitinhRouter.get("/get-list-gender" ,getListGender);


module.exports = {
    gioitinhRouter,
    
  };