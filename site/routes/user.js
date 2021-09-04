const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/cart", userController.cart);
router.get("/lonIn", userController.login);
router.get("/profile", userController.profile);
router.get("/modifyProfile", userController.modProfile);
router.get("/turnos", userController.turno);
