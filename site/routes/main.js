const express = require("express");
const path = require("path");
const router = express.Router();
const controllerMain = require("../controller/main");

// RUTAS

router.get("/", controllerMain.main);

router.get("/products", controllerMain.productView);

router.get("/register", controllerMain.registerView);

module.exports = router;
