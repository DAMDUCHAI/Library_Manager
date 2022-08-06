const express = require("express");
const {     numberOfUnpaidBooks,   //số lườn quyển sách chưa được trả
totalNumberOfBooks ,   //tổng số sách có trong thư viện
countNumberOfLostBooks,  // số sách làm mất
countNumberReader,        // số độc giả
countBookLate     , // sô sách trả muộn
countBookEarly} =require("../controllers/dashboard.controllers");
  
const dashboardRouter = express.Router();
dashboardRouter.get("/numberOfUnpaidBooks" ,numberOfUnpaidBooks);
dashboardRouter.get("/totalNumberOfBooks" ,totalNumberOfBooks);
dashboardRouter.get("/countNumberOfLostBooks" ,countNumberOfLostBooks);
dashboardRouter.get("/countNumberReader" ,countNumberReader);
dashboardRouter.get("/countBookLate" ,countBookLate);
dashboardRouter.get("/countBookEarly" ,countBookEarly);

module.exports = {
    dashboardRouter,
  };