const express = require("express");
const router = express.Router();
const controllerHost = require("../controller/host");

router.get("/addProduct", controllerHost.addProduct);
router.get("/hc", controllerHost.hc);
router.get("/modProduct", controllerHost.modProduct);

module.exports = router;
