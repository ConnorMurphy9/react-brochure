const express = require('express');

const Models = require('./models')
const Controllers = require('./controllers')
const seedAll = require('./seeds/index')
const path = require('path')
const { strict } = require('assert')

const app = express();
const PORT = process.env.PORT || 3040;

const sess = {
    secret: 'Super duper secret',
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

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: true }).then(async () => {
    await seedAll()
    await app.listen(PORT, () => {
        console.log(`App Listening on port ${PORT}`)
    });
})