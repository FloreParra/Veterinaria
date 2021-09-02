const express = require("express");
const path = require("path");

const hostControler = {
  addProduct: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/host/addProduct.html");
    res.sendFile(ruta);
  },
  hc: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/host/hc.html");
    res.sendFile(ruta);
  },
  modProduct: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/host/modProducts.html");
    res.sendFile(ruta);
  },
};

module.exports = hostControler;
