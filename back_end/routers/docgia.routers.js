const express = require("express");
const {        createReader,
    getListReader,
    getReader,
    updateReader,
    deleteReader} =require("../controllers/docgia.controllers");
    const {authenticate
    } =require("../middlewares/auth/authenticate");

const docgiaRouter = express.Router();
docgiaRouter.post("/create" ,authenticate,createReader);
docgiaRouter.get("/get-list-reader" ,getListReader);
docgiaRouter.get("/:id",getReader);
docgiaRouter.put("/:id",authenticate ,updateReader);
docgiaRouter.delete("/:id",authenticate ,deleteReader);

module.exports = {
    docgiaRouter,
    
  };