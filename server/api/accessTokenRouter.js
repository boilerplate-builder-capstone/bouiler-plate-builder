const accessTokenRouter = require('express').Router();
const axios = require('axios');

accessTokenRouter.get('/', async (req, res, next) => {
  try {
    let response = (
      await axios.post('https://github.com/login/oauth/access_token', {
        code: req.query.code,
        client_id: process.env.client_id,
        client_secret: process.env.client_secret,
      })
    ).data;
    res.send(response);
  } catch (error) {
    console.log('error in accessTokenRouter', error);
    next(error);
  }
});

module.exports = accessTokenRouter;
