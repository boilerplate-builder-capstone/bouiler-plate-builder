const jwt = require('jsonwebtoken');

const User = require('../db/models/User');

const authRouter = require('express').Router();

authRouter.get('/', async (req, res, next) => {
  try {
    // get the userId from the token and find the user in our db
    const { userId } = await jwt.verify(
      req.headers.authorization,
      process.env.JWT
    );
    // if (userId) {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      const error = Error('wrong login or no user found');
      error.status = 401;
      throw error;
    }
    res.send(user);
    // }
  } catch (error) {
    console.log('error occured in /api/auth');
    next(error);
  }
});

module.exports = authRouter;

// if you are having trouble deploying on heroku due because of oauth
// check prof's video at timestamp 1:07:00
// https://www.youtube.com/watch?v=o58zhvHC5kQ
