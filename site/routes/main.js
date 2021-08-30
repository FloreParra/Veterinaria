const express = require("express");
const path = require("path");
const router = express.Router();

// RUTAS

router.get("/", (req, res) => {
  let ruta = path.resolve(__dirname, "../src/views/main/index.html");
  res.sendFile(ruta);
});

router.get("/productos", (req, res) => {
  let ruta = path.resolve(__dirname, "../src/views/main/products.html");
  res.sendFile(ruta);
});

router.get("/register", (req, res) => {
  let ruta = path.resolve(__dirname, "../src/views/main/register.html");
  res.sendFile(ruta);
});

module.exports = router;
