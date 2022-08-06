const express = require("express");
const {    createComment,
    getListCommentByBook,
    getComment,
    updateComment,
    deleteComment} =require("../controllers/comment.controllers");
    const {authenticate
    } =require("../middlewares/auth/authenticate");
const commentRouter = express.Router();
commentRouter.post("/create" ,authenticate,createComment);
commentRouter.get("/get-list-comment/:id" ,getListCommentByBook);
commentRouter.get("/:id" ,getComment);
commentRouter.put("/:id",authenticate ,updateComment);
commentRouter.delete("/:id",authenticate ,deleteComment);

module.exports = {
    commentRouter,
  };