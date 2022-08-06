const express = require("express");
const {        createStaff,getListStaff,getStaff,updateStaff,deleteStaff
   } =require("../controllers/nhanvien.controllers");
    const {authenticate
    } =require("../middlewares/auth/authenticate");

const nhanvienRouter = express.Router();
nhanvienRouter.post("/create" ,createStaff);
nhanvienRouter.get("/get-list-staff"  ,getListStaff);
nhanvienRouter.get("/:id"  ,getStaff);
nhanvienRouter.put("/:id"  ,updateStaff);
nhanvienRouter.delete("/:id" ,deleteStaff);

module.exports = {
    nhanvienRouter,
    
  };