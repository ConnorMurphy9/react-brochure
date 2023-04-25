const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001;
const seedAll = require('./seeds/index')



const sess = {
  secret: 'Super duper top secret',
  cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  }),
}

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
  await app.listen(PORT, () => {
      console.log(`App Listening on port ${PORT}`)
  });
})

