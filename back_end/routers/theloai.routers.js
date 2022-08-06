

const express = require("express");
const {getListCategoryBook,getCategoryBook,updateCategoryBook,
  deleteCategoryBook,createCategoryBook} =require("../controllers/theloai.controllers");
const {authenticate
} =require("../middlewares/auth/authenticate");
const theloaiRouter = express.Router();

theloaiRouter.post("/create",authenticate  ,createCategoryBook);
theloaiRouter.get("/get-list-category"  ,getListCategoryBook);
theloaiRouter.get("/:id"  ,getCategoryBook);
theloaiRouter.put("/:id",authenticate  ,updateCategoryBook);
theloaiRouter.delete("/:id",authenticate  ,deleteCategoryBook);
module.exports = {
    theloaiRouter,
    
  };