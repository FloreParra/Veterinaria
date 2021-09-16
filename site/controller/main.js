const path = require("path");

const mainController = {
  main: (req, res) => {
    res.render("main/index");
  },
  productView: (req, res) => {
    res.render("main/products");
  },
  registerView: (req, res) => {
    res.render("main/register");
  },
};

module.exports = mainController;
