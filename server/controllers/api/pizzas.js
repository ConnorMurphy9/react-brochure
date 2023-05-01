const express = require("express");
const router = express.Router();
const { Pizza } = require("../models");

router.get("/", async (req, res) => {
  const pizzas = await Pizza.findAll();
  res.send(pizzas);
});

router.post("/", async (req, res) => {
  const { name, description, price } = req.body;
  const pizza = await Pizza.create({
    name,
    description,
    price,
  
  });
  res.send(pizza);
});

module.exports = router;
