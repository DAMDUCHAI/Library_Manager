const express = require("express");
const {    createBookshelf,
    getListBookshelf,
    getBookshelf,
    updateBookshelf,
    deleteBookshelf} =require("../controllers/kesach.controllers");
    const {authenticate
    } =require("../middlewares/auth/authenticate");
const kesachRouter = express.Router();
kesachRouter.post("/create",authenticate ,createBookshelf);
kesachRouter.get("/get-list-bookshelf" ,getListBookshelf);
kesachRouter.get("/:id",authenticate ,getBookshelf);
kesachRouter.put("/:id",authenticate ,updateBookshelf);
kesachRouter.delete("/:id",authenticate ,deleteBookshelf);

module.exports = {
    kesachRouter,
    
  };