const express = require("express");
const path = require("path");

const hostControler = {
  addProduct: (req, res) => {
    res.render("host/addProduct");
  },
  createProduct: (req, res) => {
    let datos = { ...req.body };
    console.log(datos);
    res.redirect("/main/products");
  },
  hc: (req, res) => {
    res.render("host/hc");
  },
  modProduct: (req, res) => {
    res.render("host/modProducts");
  },
  newentry: (req, res) => {
    res.render("host/newEntry");
  },
  paciente: (req, res) => {
    res.render("host/paciente");
  },
};

module.exports = hostControler;
