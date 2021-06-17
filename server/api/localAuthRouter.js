const User = require('../db/models/User');

const localAuthRouter = require('express').Router();

// check login credentials and create a token
localAuthRouter.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await User.authenticate({ username, password });
    res.send(token);
  } catch (error) {
    console.log('error occured in post/api/localAuthRouter', error);
    next(error);
  }
});

localAuthRouter.post('/create', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    res.status(201).send(newUser);
  } catch (error) {
    console.log('error occured in post/api/localAuthRouter/create', error);
    next(error);
  }
});

module.exports = localAuthRouter;
