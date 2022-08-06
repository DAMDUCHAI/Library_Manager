const express = require("express");
const {    getListBorrowByReader,countBorrowBookByMonth} =require("../controllers/muonsach.controlles");
const {    getListBorrowByEmail} =require("../controllers/muonsach.controlles");

const muonsachRouter = express.Router();
muonsachRouter.get("/author/:id" ,getListBorrowByReader);
muonsachRouter.get("/author-email/:id" ,getListBorrowByEmail);
muonsachRouter.get("/count-borrow-book-by-month" ,countBorrowBookByMonth);



module.exports = {
    muonsachRouter,
    
  };