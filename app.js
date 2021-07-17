// Require
const express = require("express");

// Functions
const app = express();

// Puerto
app.listen(3001, () => console.log("puerto funcionando 3001"));

// RUTAS
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);
