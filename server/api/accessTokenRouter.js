const accessTokenRouter = require('express').Router();

accessTokenRouter.get('/', async (req, res, next) => {
  try {
    res.send(req.query.code);
  } catch (error) {
    console.log('error in accessTokenRouter', error);
    next(error);
  }
});

module.exports = accessTokenRouter;
