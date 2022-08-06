const express = require("express");
const {  createLibraryCard,
    getListLibraryCard,
    getLibraryCard,
    updateLibraryCard,
    deleteLibraryCard} =require("../controllers/thethuvien.controllers");

const thethuvienRouter = express.Router();
thethuvienRouter.post("/create" ,createLibraryCard);
thethuvienRouter.get("/get-list-library-card" ,getListLibraryCard);
thethuvienRouter.get("/:id" ,getLibraryCard);
thethuvienRouter.put("/:id" ,updateLibraryCard);
thethuvienRouter.delete("/:id" ,deleteLibraryCard);


module.exports = {
    thethuvienRouter,
    
  };