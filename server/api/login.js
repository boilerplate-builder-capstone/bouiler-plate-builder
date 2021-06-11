// redirects the page to github login

const loginRouter = require('express').Router();

loginRouter.get('/', async (req, res, next) => {
  try {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.client_id}`
    );
  } catch (error) {
    console.log('error in loginRouter', error);
    next(error);
  }
});

module.exports = loginRouter;

// if you are having trouble deploying on heroku due because of oauth
// check prof's video at timestamp 1:07:00
// https://www.youtube.com/watch?v=o58zhvHC5kQ
