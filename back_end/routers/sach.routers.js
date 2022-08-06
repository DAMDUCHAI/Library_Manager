const express = require("express");
const {getListBook,getBook,updateBook,deleteBook,createBook, 
   getBookByAuthor,getBookByCategoryBook,getBookByPublisher,
   getBookByBookshelf,createBorrowBook,createBorrowDetaildBook,giveBookBack,viewBookCard,previewGiveBook,viewDetaildBookCard
} =require("../controllers/sach.controllers");

const {authenticate
} =require("../middlewares/auth/authenticate");
const sachRouter = express.Router();
const {uploadImages}= require('../middlewares/upload/upload-images')


sachRouter.post("/create" ,authenticate,uploadImages('book_img'),createBook);
sachRouter.get("/get-list-book" ,getListBook);
sachRouter.get("/:id" ,getBook);
sachRouter.put("/:id" ,uploadImages('book_img'),updateBook);
sachRouter.delete("/:id" ,deleteBook);
sachRouter.post("/create-borrow-books",authenticate ,createBorrowBook);
sachRouter.post("/create-borrow-detaild" ,createBorrowDetaildBook);
sachRouter.get("/view-book-card/:id" ,viewBookCard);
sachRouter.get("/view-detaild-book-card/:id" ,viewDetaildBookCard);
sachRouter.put("/give-book-back/:id",authenticate ,giveBookBack);
sachRouter.put("/preview-give-book/:id" ,previewGiveBook);



module.exports = {
  sachRouter,
    
  };
  