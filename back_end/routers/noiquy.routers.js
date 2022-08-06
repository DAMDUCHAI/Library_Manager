const express = require("express");
const {getListRulesBook,getRulesBook,updateRulesBook,deleteRulesBook,createRulesBook} =require("../controllers/noiquy.controllers");
const {authenticate
} =require("../middlewares/auth/authenticate");
const noiquyRouter = express.Router();
noiquyRouter.post("/create",authenticate  ,createRulesBook);
noiquyRouter.get("/get-list-rules"  ,getListRulesBook);
noiquyRouter.get("/:id"  ,getRulesBook);
noiquyRouter.put("/:id",authenticate  ,updateRulesBook);
noiquyRouter.delete("/:id",authenticate  ,deleteRulesBook);
module.exports = {
    noiquyRouter,
    
  };