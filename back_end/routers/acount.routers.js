const express = require("express");
const {          createAcount,
    getListAcount,
    getAcount,
    updateAcount,
    deleteAcount,login,changePass,getNameUser,banAcount} =require("../controllers/acount.controllers");

    const {authenticate
    } =require("../middlewares/auth/authenticate");

const acountRouter = express.Router();
acountRouter.post("/create/:role" ,createAcount);
acountRouter.get("/get-list-acount/" ,getListAcount);
acountRouter.get("/:id" ,getAcount);
acountRouter.put("/:id",authenticate ,updateAcount);
acountRouter.delete("/:id",authenticate ,deleteAcount);
acountRouter.post("/login", login);
acountRouter.put("/change-pass/:id/",authenticate, changePass);
acountRouter.get("/get-name-user/:id/:role", getNameUser);
acountRouter.put("/ban/:id", banAcount);


module.exports = {
    acountRouter,
    
  };