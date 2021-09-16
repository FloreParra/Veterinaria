const path = require("path");

const mainController = {
  main: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/main/index.ejs");
    res.render("main/index");
  },
  productView: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/main/products.html");
    res.sendFile(ruta);
  },
  registerView: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/main/register.html");
    res.sendFile(ruta);
  },
};

module.exports = mainController;
