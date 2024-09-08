const express = require("express");
const cartRouter = express.Router();
const { addToCart, removeFromCart, getCart } = require("../controllers/cartController");
const authMiddleware = require("../middlewares/auth");

cartRouter.post("/add", authMiddleware, addToCart);

cartRouter.post("/remove", authMiddleware, removeFromCart);

cartRouter.get("/get", authMiddleware, getCart);

module.exports = cartRouter