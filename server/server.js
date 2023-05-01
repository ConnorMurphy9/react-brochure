const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const routes = require('./controllers');
const { Sequelize } = require("sequelize");
const sequelize = require('./config/connection');
const admin = require("firebase-admin");
const seedAll = require('./seeds/index')
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
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
});

User.hasMany(Pizza);
Pizza.belongsTo(User);

app.get("/api/pizzas", async (req, res) => {
  const pizzas = await Pizza.findAll();
  res.send(pizzas);
});

app.post("/api/pizzas", firebaseAuthMiddleware, async (req, res) => {
  const { name, description, price} = req.body;
  const user = await User.findOne({ where: { firebase_id: req.user.uid } });
  const pizza = await user.createPizza({
    name,
    description,
    price,
  });
  res.send(pizza);
});

// app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(session(sess))




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// turn on connection to db and server
sequelize.sync({ force: false }).then(async () => {
    await seedAll()
    await app.listen(port, () => {
        console.log(`App Listening on port ${port}`)
    });
  })