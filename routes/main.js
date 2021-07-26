const express = require("express");
const path = require("path");
const router = express.Router();

// RUTAS

router.get("/", (req, res) => {
  let ruta = path.resolve(__dirname, "../src/views/main/index.html");
  res.sendFile(ruta);
});

module.exports = router;
