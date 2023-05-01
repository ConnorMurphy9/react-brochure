const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const admin = require("firebase-admin");
const seedAll = require('./seeds/index')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Firebase configuration
const firebaseServiceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(firebaseServiceAccount),
  databaseURL: "https://auth-brochure-development.firebaseio.com",
});

const firebaseAuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  }
};

const sequelize = new Sequelize("pizzeria_db", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Error connecting to database: ", err));

const User = sequelize.define("user", {
  firebase_id: Sequelize.STRING,
});

const Pizza = sequelize.define("pizza", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT,
  image_url: Sequelize.STRING,
});

User.hasMany(Pizza);
Pizza.belongsTo(User);

app.get("/api/pizzas", async (req, res) => {
  const pizzas = await Pizza.findAll();
  res.send(pizzas);
});

app.post("/api/pizzas", firebaseAuthMiddleware, async (req, res) => {
  const { name, description, price, image_url } = req.body;
  const user = await User.findOne({ where: { firebase_id: req.user.uid } });
  const pizza = await user.createPizza({
    name,
    description,
    price,
    image_url,
  });
  res.send(pizza);
});

// app.listen(port, () => console.log(`Server running on port ${port}`));

// turn on connection to db and server
sequelize.sync({ force: false }).then(async () => {
    await seedAll()
    await app.listen(port, () => {
        console.log(`App Listening on port ${port}`)
    });
  })