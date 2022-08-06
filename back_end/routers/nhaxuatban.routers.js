const express = require("express");
const {    createPublisher,
    getListPublisher,
    getPublisher,
    updatePublisher,
    deletePublisher} =require("../controllers/nhaxuatban.controllers");
   
    const {authenticate
    } =require("../middlewares/auth/authenticate");

const nhaxuatbanRouter = express.Router();
nhaxuatbanRouter.post("/create",authenticate ,createPublisher);
nhaxuatbanRouter.get("/get-list-publisher" ,getListPublisher);
nhaxuatbanRouter.get("/:id" ,getPublisher);
nhaxuatbanRouter.put("/:id",authenticate ,updatePublisher);
nhaxuatbanRouter.delete("/:id",authenticate ,deletePublisher);

module.exports = {
    nhaxuatbanRouter,
    
  };