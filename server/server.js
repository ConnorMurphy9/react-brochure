// const express = require('express');
// const routes = require('./controllers');
// const sequelize = require('./config/connection');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const path = require('path')
// const app = express();
// const PORT = process.env.PORT || 3001;
// const seedAll = require('./seeds/index')



// const sess = {
//   secret: 'Super duper top secret',
//   cookie: {
//       maxAge: 24 * 60 * 60 * 1000,
//       httpOnly: true,
//       secure: false,
//       sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//       db: sequelize
//   }),
// }

// app.use(session(sess))




// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// app.use(routes);
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// // turn on connection to db and server
// sequelize.sync({ force: false }).then(async () => {
//   await seedAll()
//   await app.listen(PORT, () => {
//       console.log(`App Listening on port ${PORT}`)
//   });
// })

const express = require('express');
// Create an instance of the Express application
const app = express();
const bodyParser = require('body-parser');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const seedAll = require('./seeds/index');
const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });



// Start the server
const PORT = process.env.PORT || 3001;


// Use middleware to handle incoming requests
app.use(bodyParser.json());


// Import the route files
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error: ' + err));

// turn on connection to db and server
sequelize.sync({ force: false }).then(async () => {
    await seedAll()
    await app.listen(PORT, () => {
        console.log(`App Listening on port ${PORT}`)
    });
  });