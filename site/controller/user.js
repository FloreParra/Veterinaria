const express = require("express");
const path = require("path");

module.exports = {
  cart: (req, res) => {
    let ruta = path.resolve(__dirname, "../scr/views/user/cart.html");
    res.sendFile(ruta);
  },
  login: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/user/logIn.html");
    res.sendFile(ruta);
  },
  profile: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/user/profile.html");
    res.sendFile(ruta);
  },
  modProfile: (req, res) => {
    let ruta = path.resolve(__dirname, "../src/views/user/modProfile.html");
    res.sendFile(ruta);
  },
  turno: (req, res) => {
    let ruta = path.resolve(__dirname, "../scr/views/user/turnos.html");
    res.sendFile(ruta);
  },
};
