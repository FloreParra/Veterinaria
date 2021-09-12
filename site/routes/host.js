const express = require("express");
const router = express.Router();
const controllerHost = require("../controller/host");
const { route } = require("./user");

router.get("/addProduct", controllerHost.addProduct);
router.get("/hc", controllerHost.hc);
router.get("/modProduct", controllerHost.modProduct);
router.get("/:id?/paciente", controllerHost.paciente);
router.get("/:id?/newEntry", controllerHost.newentry);

module.exports = router;
