const express = require("express");

const rootRouter = express.Router();
const {sachRouter} =require("./sach.routers")
const {theloaiRouter} =require("./theloai.routers")
const {tacgiaRouter} =require("./tacgia.routers")
const {kesachRouter} =require("./kesach.routers")
const {nhaxuatbanRouter} =require("./nhaxuatban.routers")
const {docgiaRouter} =require("./docgia.routers")
const {thongtinchungRouter} =require("./thongtinchung.routers")
const {acountRouter} =require("./acount.routers")
const {gioitinhRouter} =require("./gender.routers")
const {thethuvienRouter} =require("./thethuvien.routers")
const {muonsachRouter} =require("./muonsach.routers")
const {feedbackRouter} =require("./feedback.routers")
const {mailRouter} =require("./mail.router")
const {commentRouter} =require("./comment.routers")
const {tienphatRouter} =require("./tienphat.routers")
const {noiquyRouter} =require("./noiquy.routers")
const {nhanvienRouter} =require("./nhanvien.routers")
const {validateRouter} =require("./validate.routers")
const {dashboardRouter} =require("./dashboard.routers")



rootRouter.use("/book", sachRouter);
rootRouter.use("/category", theloaiRouter);
rootRouter.use("/author", tacgiaRouter);
rootRouter.use("/bookshelf", kesachRouter);
rootRouter.use("/publisher", nhaxuatbanRouter);
rootRouter.use("/reader", docgiaRouter);
rootRouter.use("/common-information", thongtinchungRouter);
rootRouter.use("/acount", acountRouter);
rootRouter.use("/gender", gioitinhRouter);
rootRouter.use("/library-card", thethuvienRouter);
rootRouter.use("/borrow", muonsachRouter);
rootRouter.use("/feedback", feedbackRouter);
rootRouter.use("/mail", mailRouter);
rootRouter.use("/comment", commentRouter);
rootRouter.use("/money", tienphatRouter);
rootRouter.use("/rules", noiquyRouter);
rootRouter.use("/staff", nhanvienRouter);
rootRouter.use("/validate", validateRouter);
rootRouter.use("/dashboard", dashboardRouter);



module.exports = {
    rootRouter,
  };
  
  