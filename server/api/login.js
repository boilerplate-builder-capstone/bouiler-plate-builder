const loginRouter = require('express').Router();
const env = require('../../env');
process.env.client_id = env.client_id;
process.env.client_secret = env.client_secret;

loginRouter.get('/', async (req, res, next) => {
  try {
    res.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.client_id}`
    );
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
