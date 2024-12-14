const express = require("express");
const route = express.Router();
const BatimentController = require("../controller/batimentcontroller");
const niveaucontroller = require("../controller/niveaucontroller");


route.post("/addbatiment", BatimentController.add);
route.get("/getallbatiment", BatimentController.getallbatiment);
route.get("/getbyid/:id", BatimentController.getbyid);
route.delete("/deletebatiment/:id", BatimentController.deletebatiment);


  module.exports = route;