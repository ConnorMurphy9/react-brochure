const express = require("express");
const router = express.Router();
const { User, Pizza } = require("../models");
const firebaseAuthMiddleware = require("../middleware/firebaseAuthMiddleware");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    await User.create({
      firebase_id: userRecord.uid,
    });
    res.send(userRecord);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(userRecord.uid);
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
});

router.get("/pizzas", firebaseAuthMiddleware, async (req, res) => {
  const user = await User.findOne({ where: { firebase_id: req.user.uid } });
  const pizzas = await user.getPizzas();
  res.send(pizzas);
});

module.exports = router;
