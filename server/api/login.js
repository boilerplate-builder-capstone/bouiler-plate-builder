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
