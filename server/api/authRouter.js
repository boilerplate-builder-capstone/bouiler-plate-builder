const User = require('../db/models/User');

const authRouter = require('express').Router();

authRouter.get('/', async (req, res, next) => {
  try {
    const { id } = await jwt.verify(req.headers.authorization, process.env.JWT);
    const user = await User.findByPk(id);
    if (!user) {
      const error = Error('wrong login');
      error.status = 401;
      throw error;
    }
    res.send(user);
  } catch (error) {
    console.log('error occured in /api/auth');
    next(error);
  }
});

module.exports = authRouter;
