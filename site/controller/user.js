const express = require("express");
const path = require("path");

module.exports = {
  cart: (req, res) => {
    res.render("user/cart");
  },
  login: (req, res) => {
    res.render("user/logIn");
  },
  profile: (req, res) => {
    res.render("user/profile");
  },
  modProfile: (req, res) => {
    res.render("user/modProfile");
  },
  turno: (req, res) => {
    res.render("user/turno");
  },
};
