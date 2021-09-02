const express = require("express");
const { Router } = express;
const controllerHost = require("../controller/host");

Router.get("/addProduct", controllerHost.addProduct);
Router.get("/hc", controllerHost.hc);
Router.get("/modProduct", controllerHost.modProduct);

module.exports = Router;
