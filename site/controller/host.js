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
  newentry: (req, res) => {
    let ruta = path.resolve(__dirname, "../scr/views/host/newEntry.html");
    res.sendFile(ruta);
  },
  paciente: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/host/paciente.html");
    res.sendFile(ryta);
  },
};

module.exports = hostControler;
