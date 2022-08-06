const express = require("express");
const {   createFeedBack,getAllFeedback,updateTrangThaiFeedBack} =require("../controllers/feedback.controllers");
const {authenticate
} =require("../middlewares/auth/authenticate");
const feedbackRouter = express.Router();
feedbackRouter.post("/create",authenticate ,createFeedBack);
feedbackRouter.get("/get-all-feedback/:id" ,getAllFeedback);
feedbackRouter.put("/:id",authenticate ,updateTrangThaiFeedBack);
module.exports = {
    feedbackRouter,
    
  };