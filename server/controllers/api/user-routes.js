const router = require('express').Router();
const { User, Order, Product } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Product, through: Order, as: 'ordered_product' }]
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      // JOIN with Products, using the Order through table
      include: [{ model: Product, through: Order, as: 'user_orders' }]
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a user
//localhost:3001/api/user/signup
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    //this sets up the new user information
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = userData.id;
      req.session.username = userData.username;
      res.status(200).json(userData)
    });
    console.log(req.session.loggedIn)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//api/user/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.status(404).json({ message: "Login failed please try again!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(404).json({ message: "Incorrect password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.userID = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(200).json({ message: "you are now logged in! YAY" })
    });
    console.log(req.session.userID)

  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/logout', async (req, res) => {
  try {
    console.log("logging out!")
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end()
      });
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
