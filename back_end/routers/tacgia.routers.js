const express = require("express");
const {    createAuthor,
    getListAuthor,
    getAuthor,
    updateAuthor,
    deleteAuthor} =require("../controllers/tacgia.controllers");
    const {authenticate
    } =require("../middlewares/auth/authenticate");

const tacgiaRouter = express.Router();
tacgiaRouter.post("/create",authenticate ,createAuthor);
tacgiaRouter.get("/get-list-author"  ,getListAuthor);
tacgiaRouter.get("/:id"  ,getAuthor);
tacgiaRouter.put("/:id",authenticate  ,updateAuthor);
tacgiaRouter.delete("/:id",authenticate  ,deleteAuthor);

module.exports = {
    tacgiaRouter,
    
  };