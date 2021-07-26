// Require
const express = require("express");
const path = require("path");

// Functions
const app = express();

// Puerto
app.listen(3001, () => console.log("puerto funcionando 3001"));

// Archivos estáticos
app.use(express.static(path.resolve(__dirname, "./src/public")));

// RUTAS
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);
